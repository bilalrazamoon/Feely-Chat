'use strict';

/**
 * @ngdoc function
 * @name FeelyChat.controller:ChatController
 * @description
 * # ChatController
 */
angular.module('FeelyChat')
  .controller('ChatController', function ($scope, $stateParams, GroupService, ChatService, $rootScope) {
    var chatId = $stateParams.id;
    $scope.userId=$rootScope.user.$id;
    $scope.chat = ChatService.get(chatId,10);

  });
