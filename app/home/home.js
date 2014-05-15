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

  //add the sheppard and bloor lines
  //open `ttc-stations.json` to see the data
}]);
