viewsModule.config(['$stateProvider', function($stateProvider) {
  $stateProvider.state("home", {
                  url : "/",
                  templateUrl : "./home/home.html",
                  controller : 'HomeCtrl'
                })
}]);

viewsModule.controller('HomeCtrl', ['$scope', 'ttcStations', function($scope, ttcStations) {
  ttcStations('yonge_line').then(function(stations) {
    $scope.yongeLineStations = stations;
  });

  ttcStations('sheppard_line').then(function(stations) {
    $scope.sheppardLineStations = stations;
  });

  ttcStations('bloor_line').then(function(stations) {
    $scope.bloorLineStations = stations;
  });
}]);
