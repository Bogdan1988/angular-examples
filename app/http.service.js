angular.module('myApp')
.factory('HTTP', function($q, $http){

	return {
		getData: getData
	};

	function getData() {
		var defer = new $q.defer();

		$http
			.get('dummy.json')
			.then(function(response) {
				console.log('ok');
				defer.resolve(response.data);
			})
			.catch(function(reason) {
				console.error('не ok', reason);
				defer.reject(reason);
			});

		return defer.promise;
	}

});