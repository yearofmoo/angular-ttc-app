viewsModule.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/");

  $stateProvider.state("station", {
    url : "/stations/:station",
    templateUrl : "./stations/station.html",
    controller : 'StationCtrl as station',
    resolve : {
      station : ['ttcStation', '$stateParams', function(ttcStation, $stateParams) {
        return ttcStation($stateParams.station);
      }]
    }
  });

}]);

viewsModule.value('isSubwayStop', function(stop) {
  return /_platform$/.test(stop.uri);
});

viewsModule.value('isValidStop', function(stop) {
  return !/Unused/.test(stop.name) && stop.routes.length > 0;
});

viewsModule.run(['$rootScope', '$location', '$anchorScroll', function($rootScope, $location, $anchorScroll) {
  $rootScope.jumpTo = function(anchor) {
    $location.hash(anchor);
    $anchorScroll();
  };

  $rootScope.parameterize = function(word) {
    return word.replace(/\W+/g,'-');
  };
}])

viewsModule.controller('StationCtrl', ['$scope', 'station', 'isSubwayStop', 'isValidStop',
                               function($scope,   station,   isSubwayStop,   isValidStop) {
  this.name = station.name;

  this.stops = _.filter(station.stops, isValidStop);

  //use isSubwayStop to filter stops for the subway and bus
  this.subwayStops = [];
  this.busStops = [];
}])
