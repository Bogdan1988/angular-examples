angular.module('myApp')
.controller('MainController', function($scope, $http, $timeout){
	$scope.user = {
		name: 'Admin',
		id: 10,
		ready: false
	};

	// $scope.$watchGroup(['user.name', 'user.ready'], function(newValue, oldValue) {
	// 	console.log('newValue', newValue);
	// 	console.log('oldValue', oldValue);
	// });

	$scope.toggleReady = function() {
		$scope.user.ready = !$scope.user.ready;
	};
	$scope.getAvailability = function() {
		return !!$scope.user.id;
	};

	$scope.myStyle = {
		backgroundColor: 'cyan',
		'font-size': '20px'
	};

	$timeout(function() {
		$scope.urlPart = 'webhp?sourceid=chrome-instant&ion=1&espv=2&ie=UTF-8#q=%D0%BA%D1%83%D1%80%D1%81%D1%8B%20%D0%B0%D0%BD%D0%B3%D1%83%D0%BB%D1%8F%D1%80';
		$scope.imgName = '16710fBjLzqnJlMXhoFHAG';
	}, 4000);

	$scope.isReadOnly = false;
	$scope.isDisabled = false;

	$scope.toggleReadonly = function() {
		$scope.isReadOnly = !$scope.isReadOnly;
	};
	$scope.toggleDisabled = function() {
		$scope.isDisabled = !$scope.isDisabled;
	};
	// $scope.selectedItem = 3;

	$scope.data = [
		{id: 0, name: 'Каждый'},
		{id: 1, name: 'Охотник'},
		{id: 2, name: 'Желает'},
		{id: 3, name: 'Знать'},
		{id: 4, name: 'Где'},
		{id: 5, name: 'Сидит'},
		{id: 6, name: 'Фазан'}
	];

	$scope.getItemId = function (ind) {
		console.log(ind);
	};

	$scope.loading = true;
	$http.get('dummy.json')
		.then(function(response) {
			console.info(response.data);
			$scope.dummy = response.data;
		})
		.catch(function(reason) {
			console.error(reason);
			console.log('Все очень плохо!');
		})
		.finally(function() {
			$scope.loading = false;
		});

	// $.ajax({
	// 	url: '',
	// 	method: 'GET',
	// 	success: function(response) {
	// 		//
	// 	},
	// 	error: function(reason) {
	// 		//
	// 	}
	// });












});