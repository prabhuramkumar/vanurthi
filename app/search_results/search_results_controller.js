'use strict';

angular.module('searchResults')
.controller('SearchResultsCtrl', ['$scope', 'SearchService',
	function($scope, SearchService) {
		$scope.flightList = false;

		$scope.searchFlights = function (searchQuery) {
			$scope.flightList = true;
			$scope.returnAvailable = false;
			$scope.onwardFlights = [];
			$scope.returnFlights = [];

			SearchService.getOnWardFlightResults(searchQuery.from, searchQuery.to, searchQuery.departDate).then(function(data){
				$scope.onwardFlights = data;
			});

			if(searchQuery.returnActive) {
				SearchService.getReturnFlightResults(searchQuery.from, searchQuery.to, searchQuery.returnDate).then(function(data){
					$scope.returnFlights = data;

				});
			}

			if($scope.returnFlights.length > 0)	{
				$scope.returnAvailable = true;
			}
		};

	}]);