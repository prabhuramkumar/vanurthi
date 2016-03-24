'use strict';

describe('searchWidget controllers', function() {
	beforeEach(module('flightSearch'));
	
	beforeEach(function(){
	    this.addMatchers({
	      toEqualData: function(expected) {
	        return angular.equals(this.actual, expected);
	      }
	    });
  	});

	describe('searchWidgetCtrl', function(){
	  	var ctrl, scope, $httpBackend;

	  	beforeEach(inject(function(_$httpBackend_, $rootScope, $controller){
	  		scope = $rootScope;
	  		ctrl = $controller('searchWidgetCtrl', {$scope: scope});
	  		
	  	}));

	    it('should diplay 2 items in the result list', function() {
	      
	      // expect(scope.flightList).toBeUndefined();
	      $httpBackend.flush();
	     

	     });

	});
});
