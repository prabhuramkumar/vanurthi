'use strict';

angular.module('searchResults').directive('searchResults', function(){
	return {
		restrict: "E",
		templateUrl: 'app/search_results/search_results.html'
	}
});