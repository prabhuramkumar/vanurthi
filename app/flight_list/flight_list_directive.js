'use strict';

angular.module('flightList', [ ]).directive('flightList', function(){
	return {
		restrict: "E",
		scope: {
			context: "@",
			flightList: "="
		},
		templateUrl: 'app/flight_list/flight_list.html'
	}
});