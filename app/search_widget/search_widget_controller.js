'use strict';

angular.module('searchWidget', [])
	.controller('SearchWidgetCtrl', ['$scope', '$http',
		function ($scope, $http) {
			var controller = this;
			controller.searchQuery = {};

			controller.showResults = function(){
				$scope.onSearch ({
					searchQuery: controller.searchQuery
				});
			};

			controller.toggleMin = function() {
				controller.minDate = controller.minDate ? null : new Date();
			};

			controller.toggleMin();

			controller.calendarState  = {
				departureOpened: false,
				returnOpened: false
			}

			controller.calendarOpen = function($event, context) {
				$event.preventDefault();
				$event.stopPropagation();
				var calendarState = controller.calendarState;

				for (var prop in calendarState) {
					calendarState[prop] = false;
				}

				calendarState[context] = true;

			};

			controller.dateOptions = {
				formatYear: 'yy',
				startingDay: 1
			};

			controller.formats = ['dd-MM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
			controller.format = controller.formats[0];

		}]);