angular.module('searchWidget')
	.directive('searchWidget', function () {
		return {
			restrict: 'E',
			scope: {
				onSearch:"&"
			},
			templateUrl: 'app/search_widget/search_widget.html',
			controller: 'SearchWidgetCtrl'
		}	
	});