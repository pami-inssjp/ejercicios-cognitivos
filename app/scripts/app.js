'use strict';

/**
 * @ngdoc overview
 * @name hton1App
 * @description
 * # hton1App
 *
 * Main module of the application.
 */
angular
  .module('hton1App', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/partials/welcome.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
        .when('/jugar', {
            templateUrl: 'views/partials/juego.html',
            controller: ''
        })
        .when('/contact', {
            templateUrl: 'views/contact.html',
            controller: ''
        })
      .otherwise({
        redirectTo: '/'
      });
  });
