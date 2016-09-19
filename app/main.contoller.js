angular.module('myApp')
.controller('MainController', function($scope, $http, $timeout, feed){
	// Call feed data from service.
	feed.async().then(function(d) {
		$scope.dummy = d;
	});

    $timeout(function() {
        $scope.pages = new Array;
        for (page = 1; page < $scope.dummy.length / $scope.pageSize + 1; page++) {
            $scope.pages.push(page);
        }
    }, 100);


    // Set pagination variables.
    $scope.firstItem = 0;
    $scope.pageSize = 10;
    $scope.currentPage = 1;

    $scope.nextPage = function () {
        $scope.firstItem = $scope.firstItem + $scope.pageSize;
        $scope.currentPage++;
    }

    $scope.previousPage = function () {
        $scope.firstItem = $scope.firstItem - $scope.pageSize;
        $scope.currentPage--;
    }

    $scope.gotoPage = function (page) {
        $scope.currentPage = page;
        $scope.firstItem = (page - 1) * $scope.pageSize;
    }
});