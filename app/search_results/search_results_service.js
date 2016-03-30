angular.module('searchResults', []).service('SearchService', ['$http', function($http){
    var url = '../../data/flightData.json',
        flightList;

    function getResults(url){
        return $http.get(url);
    }

    getResults(url).success(function(data){
        flightList = data;
    });

    function getOnWardFlightResults(from, to, departDate){
        return _(flightList)
            .where({
                "sourcecode": from,
                "destinationcode": to,
            })
            .filter(function (d) {
                var date1 = new Date(d.departure).toDateString();
                var date2 = new Date(departDate).toDateString();
                return date1 == date2;
            })
            .value();
    }

    function getReturnFlightResults(from, to, returnDate){
        return _(flightList)
            .where({
                "sourcecode": to,
                "destinationcode": from
            })
            .filter(function (d) {
                var date1 = new Date(d.departure).toDateString();
                var date2 = new Date(returnDate).toDateString();
                return date1 == date2;
            })
            .value();
    }

    return {
        getResults: getResults,
        getOnWardFlightResults: getOnWardFlightResults,
        getReturnFlightResults: getReturnFlightResults
    }
}]);