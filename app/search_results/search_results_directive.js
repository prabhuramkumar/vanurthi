'use strict';

angular.module('searchResults').directive('flightList', function(){
	return {
		restrict: 'E',
		templateUrl: 'app/search_results/search_results_list.html',
		controller: 'flightListCtrl'
	}
});