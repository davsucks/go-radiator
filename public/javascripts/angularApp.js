angular.module('radiator', ['ui.router'])
.controller('RadiatorCtrl', ['$scope', '$http', function($scope, $http) {
  $http.get('dashboard').then(function success(response) {
		$scope.dashboard = angular.fromJson(response.data);
  }, function failure(response) {
		$scope.dashboard = {};
  });
}]);
