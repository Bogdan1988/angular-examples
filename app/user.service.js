angular.module('myApp')
.service('User', function(){

	var id = 1;
	this.name = 'Admin';

	this.getId = function() {
		return id;
	};


});