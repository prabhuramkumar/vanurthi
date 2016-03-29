'use strict';

var searchResults = angular.module('searchResults', []);

searchResults.controller('SearchResultsCtrl', ['$scope', '$http',
	function($scope, $http) {
		$scope.flightList = null;
		$scope.searchFlights = function (searchQuery) {
			$http.get('../../data/flightData.json').success(function(data){
				$scope.totalPrice = 0;
				$scope.returnAvailable = false;
				$scope.onwardFlightResult = [];
				$scope.returnFlightResult = [];

				$scope.onwardFlightResult =  _(data)
					.where({ 
						"sourcecode": searchQuery.from, 
						"destinationcode": searchQuery.to,
					})
					.filter(function (d) {
						var date1 = new Date(d.departure).toDateString();
						var date2 = new Date(searchQuery.departDate).toDateString();
						return date1 == date2;
					})
					.value();


				if(searchQuery.returnActive) {
					$scope.returnFlightResult = _(data)
						.where({ 
							"sourcecode": searchQuery.to, 
							"destinationcode": searchQuery.from
						})
						.filter(function (d) {
							var date1 = new Date(d.departure).toDateString();
							var date2 = new Date(searchQuery.returnDate).toDateString();
							return date1 == date2;
						})
						.value();
				}

				if($scope.returnFlightResult.length > 0)	{
					$scope.returnAvailable = true;
				}

				if($scope.onwardFlightResult.length != 0 ||  $scope.returnFlightResult.length != 0){
					$scope.flightList = true;
				}

			});
		};

}]);