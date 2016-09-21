angular.module('myApp')
.controller('MainController', function($scope, $timeout, HTTP){

	$scope.currentPage = 0;
	$scope.count = 10;
	$scope.loading = true;

	$scope.options = [
		{count:5, 	name: 'five'},
		{count:10, name: 'ten'},
		{count:20, name: 'twenty'},
		{count:30, name: 'thirty'}
	];

	$scope.changePage = function(index) {
		$scope.currentPage = index;
		$scope.offset = $scope.count * index;
	};

	$scope.$watch('count', function(newValue) {
		if ($scope.data)
			initPagination($scope.data);

	});


	HTTP.getData()
		.then(initPagination)
		.finally(function() {
			$scope.loading = false;
		});

	function initPagination(data) {
		if (!$scope.data)
			$scope.data = data;

		$scope.totalPages = $scope.count ? Math.ceil(data.length / $scope.count) : 1;
		$scope.pagingButtons = new Array($scope.totalPages);
		// $scope.changePage(0);
	}

});