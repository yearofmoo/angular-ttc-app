viewsModule.config(['$stateProvider', function($stateProvider) {
  $stateProvider.state("near-me", {
                  url : "/near-me",
                  templateUrl : "./home/near-me.html",
                  controller : 'NearMeCtrl'
                })
}]);

viewsModule.controller('NearMeCtrl', ['$scope', 'geolocation', 'ttcNearby',
                              function($scope,   geolocation,   ttcNearby) {
  $scope.loading = true;

  geolocation.getLocation().then(function(data) {
    ttcNearby(data.coords.latitude, data.coords.longitude).then(function(results) {
      $scope.stations = results ? results.locations : [];
      $scope.loading = false;
    }); 
  });
}]);
