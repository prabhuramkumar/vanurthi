'use strict';

var searchResults = angular.module('searchResults', [])
.controller('flightListCtrl', ['$scope', '$http',
	function($scope, $http) {
		$scope.$on('loadFlights', function (event, flights) {
			$scope.flightList = flights;
		})
}]);