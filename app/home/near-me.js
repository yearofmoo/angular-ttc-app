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
    //perform a search using ttcNearby() to load the data
    //$scope.stations = ...
    //$scope.loading = false;
  });
}]);
