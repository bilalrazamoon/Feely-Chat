'use strict';

/**
 * @ngdoc function
 * @name FeelyChat.controller:RegisterController
 * @description
 * # RegisterController
 */
angular.module('FeelyChat')
  .controller('RegisterController', function ($scope, $state) {
    $scope.doRegister = function () {
      $state.go('app.home')
    };
  });
