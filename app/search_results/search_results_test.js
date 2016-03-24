'use strict';

describe('searchResults controllers', function() {
	beforeEach(module('flightSearch'));
	
	beforeEach(function(){
	    this.addMatchers({
	      toEqualData: function(expected) {
	        return angular.equals(this.actual, expected);
	      }
	    });
  	});

	describe('flightListCtrl', function(){
	  	var ctrl, scope, $httpBackend;

	  	beforeEach(inject(function(_$httpBackend_, $rootScope, $controller){
	  		$httpBackend = _$httpBackend_;
	  		$httpBackend.expectGET('../../data/flightData.json').
	  		respond([{'name':'Flight1'},{'name':'Flight2'}]);

	  		scope = $rootScope;
	  		ctrl = $controller('flightListCtrl', {$scope: scope});
	  		
	  	}));

	    it('should diplay 2 items in the result list', function() {
	      
	      // expect(scope.flightList).toBeUndefined();
	      $httpBackend.flush();
	      expect(scope.flightList).toEqualData( 
	      	[{'name':'Flight1'},{'name':'Flight2'}]
	      );

	     });

	});
});
