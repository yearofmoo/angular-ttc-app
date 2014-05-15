angular.module('ttcApp', ['ttcAppViews', 'ui.router'])

  .config(['$locationProvider', '$urlRouterProvider', function($locationProvider, $urlRouterProvider) {
    $locationProvider.hashPrefix('!');
    $urlRouterProvider.otherwise("/");
  }])
