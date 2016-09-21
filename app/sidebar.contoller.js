angular.module('myApp')
.controller('SidebarContoller', function($scope, User){
	$scope.name = User.name;
	$scope.id = User.getId();
});