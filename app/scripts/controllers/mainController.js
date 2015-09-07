'use strict';

/**
 * @ngdoc function
 * @name FeelyChat.controller:MainController
 * @description
 * # MainController
 */
angular.module('FeelyChat')
  .controller('MainController', function ($scope, UsersService, $rootScope) {
    $scope.friends = UsersService.getFriends();
    console.log($scope.friends);
    $scope.getName= function (n) {
      //return n.split(" ")[1];
    }
  });
