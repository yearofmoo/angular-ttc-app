viewsModule.config(['$stateProvider', function($stateProvider) {
  $stateProvider.state("busses", {
                  url : "/busses",
                  templateUrl : "./home/busses.html",
                  controller : 'BussesCtrl'
                })
}]);

viewsModule.controller('BussesCtrl', ['$scope', 'ttcStations', function($scope, ttcStations) {
  ttcStations('busses').then(function(busses) {
    $scope.busses = busses;
  });
}]);
