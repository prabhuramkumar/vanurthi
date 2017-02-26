'use strict';

describe('searchResults controllers', function() {

	var searchServiceDeferred;

	beforeEach(module('searchResults'));

	//beforeEach(angular.mock.inject(function () {
	//	searchServiceDeferred = q.defer();
	//	spyOn(searchService, "getOnWardFlightResults").and.returnValue(searchServiceDeferred.promise);
	//}));


	var ctrl
		, $scope
		, Service = { // mock the Service service
			getOnWardFlightResults: function () {},
		},
		searchQuery = {
			from: 'BAN',
			to: 'CHE',
			departDate: "Fri Jun 03 2016 00:00:00 GMT+0530 (IST)"
		};

	beforeEach(inject(function ($controller, $rootScope) {
		$scope = $rootScope.$new(); // create a new clean scope
		$controller('SearchResultsCtrl as results', {
			Service: Service,
			$scope: $scope
		});

	}));



	it('should have false value for flightList and true after function call', function() {
		expect($scope.results.flightList).toBeFalsy();
		$scope.results.searchFlights(searchQuery);
		expect($scope.results.flightList).toBeTruthy();
	});


});
