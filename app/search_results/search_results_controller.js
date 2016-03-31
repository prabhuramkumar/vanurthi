'use strict';

angular.module('searchResults')
.controller('SearchResultsCtrl', ['$scope', 'SearchService',
	function($scope, SearchService) {
		var controller = this;
		controller.flightList = false;

		controller.searchFlights = function (searchQuery) {
			controller.flightList = true;
			controller.returnAvailable = false;
			controller.onwardFlights = [];
			controller.returnFlights = [];

			SearchService.getOnWardFlightResults(searchQuery.from, searchQuery.to, searchQuery.departDate).then(function(data){
				controller.onwardFlights = data;
			});

			if(searchQuery.returnActive) {
				SearchService.getReturnFlightResults(searchQuery.from, searchQuery.to, searchQuery.returnDate).then(function(data){
					controller.returnFlights = data;

				});
			}

			if(controller.returnFlights.length > 0)	{
				controller.returnAvailable = true;
			}
		};

	}]);