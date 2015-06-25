var app = angular.module('app', []);

app.controller('MyCtrl', ['$scope', '$http', function ($scope, $http) {
	$http.get('http://apis.is/concerts').
    success(function(data, status, headers, config) {
      $scope.concerts = data.results;
    }).
    //error(function(data, status, headers, config) {
      // log error
    //});
}])