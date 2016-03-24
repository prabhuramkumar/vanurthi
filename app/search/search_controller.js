'use strict';

var search = angular.module('search', []);

search.controller('SearchCtrl', ['$scope', '$http',
	function($scope, $http) {
		$scope.flightList = null;
		$scope.searchFlights = function (searchQuery) {
			$http.get('../../data/flightData.json').success(function(data){
				// console.log("data", Date.parse(data[0].return.departure));
				// console.log(searchQuery.returnDate);
				// $scope.flightList = [];
				$scope.totalPrice = 0;
				$scope.returnAvailable = false;
				$scope.onwardFlightResult = [];
				$scope.returnFlightResult = [];


				$scope.onwardFlightResult =  _(data)
					.where({ 
						"sourcecode": searchQuery.from, 
						"destinationcode": searchQuery.to,
					})
					.filter(function (d) {
						//return moment(d.onward.departure,'YYYY-MM-DDTHH:mm:SS.SSSZ').format('DD-MMM-YYYY') == moment(searchQuery.departDate).format('DD-MMM-YYYY');
						var date1 = new Date(d.departure).toDateString();
						var date2 = new Date(searchQuery.departDate).toDateString();
						return date1 == date2;
					})
					.value();


				if(searchQuery.returnActive) {
					$scope.returnFlightResult = _(data)
						.where({ 
							"sourcecode": searchQuery.to, 
							"destinationcode": searchQuery.from
						})
						.filter(function (d) {
							//return moment(d.onward.departure,'YYYY-MM-DDTHH:mm:SS.SSSZ').format('DD-MMM-YYYY') == moment(searchQuery.departDate).format('DD-MMM-YYYY');
							var date1 = new Date(d.departure).toDateString();
							var date2 = new Date(searchQuery.returnDate).toDateString();
							return date1 == date2;
						})
						.value();
				}

				if($scope.returnFlightResult.length > 0)	{
					$scope.returnAvailable = true;
				}

				if($scope.onwardFlightResult.length != 0 ||  $scope.returnFlightResult.length != 0){
					$scope.flightList = true;
				}
				console.log($scope.onwardFlightResult);
				console.log($scope.returnFlightResult);
			});
		};

		$scope.$on('searchComplete', function (event, flights) {
			$scope.$broadcast('loadFlights', flights);	
		})		
}]);