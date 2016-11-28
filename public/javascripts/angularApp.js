angular.module('radiator', ['ui.router'])
.controller('RadiatorCtrl', ['$scope', '$http', '$interval', function($scope, $http, $interval) {
  $interval(function() {
    $http.get('dashboard').then(function success(response) {
  		  $scope.dashboard = angular.fromJson(response.data);
    }, function failure(response) {
		  $scope.dashboard = {};
    });
  }, 60000);
}]);
