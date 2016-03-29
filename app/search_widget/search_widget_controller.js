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

			$scope.calendarState  = {
				departureOpened: false,
				returnOpened: false
			}

			$scope.calendarOpen = function($event, context) {
				$event.preventDefault();
				$event.stopPropagation();
				var calendarState = $scope.calendarState;

				for (var prop in calendarState) {
					calendarState[prop] = false;
				}

				calendarState[context] = true;

			};

			$scope.dateOptions = {
				formatYear: 'yy',
				startingDay: 1
			};

			$scope.formats = ['dd-MM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
			$scope.format = $scope.formats[0];

		}]);