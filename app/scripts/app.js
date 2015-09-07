'use strict';

/**
 * @ngdoc overview
 * @name FeelyChat
 * @description
 * # Initializes main application and routing
 *
 * Main module of the application.
 */


angular.module('FeelyChat', ['ionic', 'ngCordova', 'firebase'])

  .run(function ($rootScope,$ionicPlatform) {
    $rootScope.userId={$id:'001-user'};
    $ionicPlatform.ready(function () {
      // save to use plugins here
    });

    // add possible global event handlers here

  })

  .config(function ($httpProvider, $stateProvider, $urlRouterProvider) {
    // register $http interceptors, if any. e.g.
    // $httpProvider.interceptors.push('interceptor-name');

    // Application routing
    $stateProvider
      .state('login', {
        url: '/login',
        templateUrl: 'templates/login.html',
        controller: 'LoginController'
      })
      .state('register', {
        url: '/register',
        templateUrl: 'templates/register.html',
        controller: 'RegisterController'
      })
      .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'templates/main.html',
        controller: 'MainController'
      })
      .state('app.home', {
        url: '/home',
        cache: true,
        views: {
          'viewContent': {
            templateUrl: 'templates/views/home.html',
            controller: 'HomeController'
          }
        }
      })
      .state('app.chat', {
        url: '/chat/:id',
        views: {
          'viewContent': {
            templateUrl: 'templates/views/chat.html',
            controller: 'ChatController'
          }
        }
      })
      .state('app.settings', {
        url: '/settings',
        cache: true,
        views: {
          'viewContent': {
            templateUrl: 'templates/views/settings.html',
            controller: 'SettingsController'
          }
        }
      });


    // redirects to default route for undefined routes
    $urlRouterProvider.otherwise('/app/home');
  });


