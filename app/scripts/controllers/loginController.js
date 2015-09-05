'use strict';

/**
 * @ngdoc function
 * @name FeelyChat.controller:LoginController
 * @description
 * # LoginController
 */
angular.module('FeelyChat')
  .controller('LoginController', function ($scope) {
    $scope.doLogin = function () {
      $state.go('app.home')
    };
  });
