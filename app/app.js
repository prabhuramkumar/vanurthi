'use strict';

// Declare app level module which depends on views, and components
var flightSearch = angular.module('flightSearch', [
  'ngRoute',
  'flightList',
  'searchResults',
  'searchWidget',
  'ui.bootstrap',
  'firebase'
]);

flightSearch.controller('AppCtrl', function($scope){

  var firebase = new Firebase("https://flightsearch.firebaseio.com");
  $scope.user;

  firebase.onAuth(function(authData) {
    if (authData !== null) {
      $scope.user = authData;
      // console.log("Authenticated successfully with payload:", authData);
    } else {
      // Try to authenticate with Google via OAuth redirection
      firebase.authWithOAuthRedirect("google", function(error, authData) {
        if (error) {
          console.log("Login Failed!", error);
        } else{
          // Will never reach here
        }
      });
    }
  });

});

flightSearch.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'app/search_results/search_results_view.html',
    controller: "SearchResultsCtrl",
    controllerAs: "results"
  });

  $routeProvider.otherwise({redirectTo: '/'});
}]);

flightSearch.directive('debug', function($compile){
  return{
    restrict: 'A',
    teriminal : true,
    priority: 1000,
    link: function(scope, element){
      var clone = element.clone();
      clone.removeAttr("debug");
      var clonedElement = $compile(scope);
      element.after(clonedElement);
    }
  }
});
