'use strict';

angular.module('searchWidget', [])
.controller('SearchWidgetCtrl', ['$scope', '$http',
	function ($scope, $http) {
		$scope.searchQuery = {};
		
		$scope.showResults = function(){
			$scope.onSearch ({
				searchQuery: $scope.searchQuery
			});
		};

	  $scope.toggleMin = function() {
	    $scope.minDate = $scope.minDate ? null : new Date();
	  };

	  $scope.toggleMin();

	  $scope.open = function($event, context) {
	    $event.preventDefault();
	    $event.stopPropagation();

	    if(context == 'depart')
	    {
	    	$scope.openedDepart = true;
	    	$scope.openedReturn = false;
	    }
	    if(context == 'return')
	    {
	    	$scope.openedReturn = true;
	    	$scope.openedDepart = false;
	    }
	  };

	  $scope.dateOptions = {
	    formatYear: 'yy',
	    startingDay: 1
	  };

	  $scope.formats = ['dd-MM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
  	  $scope.format = $scope.formats[0];

}]);