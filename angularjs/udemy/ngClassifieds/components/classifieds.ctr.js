(function() {
  'use strict';

  angular
    .module('ngClassifieds')
    .controller('classifiedCtrl', function(
      $scope,
      $http,
      classifiedsFactory,
      $mdSidenav,
      $mdToast,
      $mdDialog
    ) {
      classifiedsFactory.getClassifieds().then(function(classifieds) {
        $scope.classifieds = classifieds.data;
      });

      var contact = {
        name: 'Ivo Costa',
        phone: '(222) 333-4444',
        email: 'costaivo@yahoo.com'
      };
      $scope.openSidebar = function() {
        console.log('opening Sidebar');
        $mdSidenav('left').open();
      };
      $scope.closeSidebar = function() {
        console.log('opening Sidebar');
        $mdSidenav('left').close();
      };

      $scope.saveClassified = function(classified) {
        if (classified) {
          classified.contact = contact;
          $scope.classifieds.push(classified);
          $scope.classified = {};
          $scope.closeSidebar();
          showToast('Classified Saved!');
        }
      };
      $scope.editClassified = function(classified) {
        console.log('Editing Classified');
        $scope.editing = true;
        $scope.classified = classified;
        $scope.openSidebar();
      };

      $scope.saveEdit = function(classified) {
        $scope.editing = false;
        $scope.classified = {};
        $scope.closeSidebar();
        showToast('Classified updated!');
      };
      $scope.deleteClassified = function(classified) {
        var confirm = $mdDialog
          .confirm()
          .title('Are you sure you want to delete ' + classified.title + '?')
          .ok('Yes')
          .cancel('No')
          .targetEvent(event);

        $mdDialog.show(confirm).then(
          function() {
            var index = $scope.classifieds.indexOf(classified);
            $scope.classifieds.splice(index, 1);
            showToast('Classified ' + classified.title + ' deleted!!');
          },
          function() {}
        );
      };
      function showToast(message) {
        $mdToast.show(
          $mdToast
            .simple()
            .content(message)
            .position('top, right')
            .hideDelay(3000)
        );
      }
    });
})();
