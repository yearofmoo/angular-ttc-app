angular.module('ttcLibrary', [])

  .constant('TTC_API_PREFIX', 'http://myttc.ca')
  .constant('TTC_API_SUFFIX', '?callback=JSON_CALLBACK')
  .constant('TTC_LAT_LNG_PATH', '/near/{{ lat }},{{ lng }}')
  .constant('TTC_STATION_PATH', '/{{ station }}')
  .constant('TTC_STATIONS_JSON_FILE', './ttc-stations.json')

  .factory('ttcStations', ['$http', '$q', 'TTC_STATIONS_JSON_FILE',
                   function($http,   $q,   TTC_STATIONS_JSON_FILE) {
    return function(line) {
      var defer = $q.defer();
      $http.get(TTC_STATIONS_JSON_FILE, { cache : true })
        .success(function(stations) {
          defer.resolve(stations[line]);
        });
      return defer.promise;
    }
  }])

  .factory('ttcRequest', ['$http', '$q', 'TTC_API_PREFIX', 'TTC_API_SUFFIX',
                  function($http,   $q,   TTC_API_PREFIX,   TTC_API_SUFFIX) {
    return function(path) {
      var defer = $q.defer();
      $http.jsonp(TTC_API_PREFIX + path + '.json' + TTC_API_SUFFIX)
        .success(function(data) {
          defer.resolve(data);
        })
      return defer.promise;
    }
  }])

  .factory('ttcStation', ['ttcRequest', '$interpolate', 'TTC_STATION_PATH',
                  function(ttcRequest,   $interpolate,   TTC_STATION_PATH) {
    return function(station) {
      var path = $interpolate(TTC_STATION_PATH)({
        station : station
      });
      return ttcRequest(path);
    }
  }])

  .factory('ttcNearby', ['ttcRequest', '$interpolate', 'TTC_LAT_LNG_PATH',
                 function(ttcRequest,   $interpolate,   TTC_LAT_LNG_PATH) {
    return function(lat, lng) {
      var path = $interpolate(TTC_LAT_LNG_PATH)({
        lat : lat,
        lng : lng
      });
      return ttcRequest(path);
    }
  }])
