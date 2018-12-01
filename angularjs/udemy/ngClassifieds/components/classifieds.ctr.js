(function() {
  'use strict';

  angular
    .module('ngClassifieds')
    .controller('classifiedCtrl', function($scope, $http, classifiedsFactory) {
      classifiedsFactory.getClassifieds().then(function(classifieds) {
        $scope.classifieds = classifieds.data;
      });
    });
})();
