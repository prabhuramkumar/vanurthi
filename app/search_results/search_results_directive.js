'use strict';

angular.module('searchResults').directive('flightList', function(){
	return {
		restrict: "E",
		scope: {
			context: "@",
			flightList: "="
		},
		templateUrl: 'app/search_results/flight_list.html'
	}
});