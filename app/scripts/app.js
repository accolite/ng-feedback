'use strict';

/**
 * @ngdoc overview
 * @name angularTestApp
 * @description
 * # angularTestApp
 *
 * Main module of the application.
 */
var angularTestApp = angular.module('angularTestApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap',
    'ui.router'
  ]);

  angularTestApp.config(function ($stateProvider, $urlRouterProvider ,$locationProvider) {
    $urlRouterProvider.otherwise("/");
    $locationProvider.html5Mode(true);
    $stateProvider
      .state('default', {
        url         : '/',
        templateUrl : 'views/main.html',
        controller  : 'MainCtrl'
      })
      .state('about', {
        url         : '/about',
        templateUrl : 'views/about.html',
        controller  : 'AboutCtrl'
      })
      .state('graph', {
        url         : '/graphs',
        templateUrl : 'views/graphs.html',
        controller  : 'graphsCtrl'
      })
      .state('EigenPrism', {
        url         : '/EigenPrism',
        templateUrl : 'views/EigenPrism.html',
        controller  : 'EigenCtrl'
      })         
  });
