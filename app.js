var app = angular.module('app', []);

app.controller('MyCtrl', ['$scope', '$http', 'concerts', function($scope, $http, concerts) {
    concerts.getConcerts().then(function(response) {
        $scope.concerts = response.data.results;
        console.log(data);
    });

}]);

app.service('concerts', ['$http', function($http) {
    this.getConcerts = function() {
        return $http.get('http://apis.is/concerts');

    };
}]);