(function() {
  'use strict';

  angular.module('myApp')
  .controller('HeaderContoller', function($scope, User){
    $scope.name = User.name;
  });

})();
