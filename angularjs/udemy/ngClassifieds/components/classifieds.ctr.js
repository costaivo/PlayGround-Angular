(function() {
  'use strict';

  angular
    .module('ngClassifieds')
    .controller('classifiedCtrl', function(
      $scope,
      $http,
      classifiedsFactory,
      $mdSidenav,
      $mdToast
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
          $mdToast.show(
            $mdToast
              .simple()
              .content('Classified Saved!')
              .position('top, right')
              .hideDelay(3000)
          );
        }
      };
    });
})();
