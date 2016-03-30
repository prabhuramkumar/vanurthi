'use strict';

angular.module('searchResults')
.controller('SearchResultsCtrl', ['$scope', 'SearchService',
	function($scope, SearchService) {
		$scope.searchFlights = function (searchQuery) {
			$scope.flightList = null;
			$scope.returnAvailable = false;
			$scope.onwardFlights = [];
			$scope.returnFlights = [];

			$scope.onwardFlights =  SearchService.getOnWardFlightResults(searchQuery.from, searchQuery.to, searchQuery.departDate);

			if(searchQuery.returnActive) {
				$scope.returnFlights = SearchService.getReturnFlightResults(searchQuery.from, searchQuery.to, searchQuery.returnDate);
			}

			if($scope.returnFlights.length > 0)	{
				$scope.returnAvailable = true;
			}

			if($scope.onwardFlights.length != 0 ||  $scope.returnFlights.length != 0){
				$scope.flightList = true;
			}else {
				$scope.flightList = false;
			}

		};

	}]);