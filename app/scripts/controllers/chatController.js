'use strict';

/**
 * @ngdoc function
 * @name FeelyChat.controller:ChatController
 * @description
 * # ChatController
 */
angular.module('FeelyChat')
  .controller('ChatController', function ($scope, $stateParams, GroupService, ChatService) {
    var chatId = $stateParams.id;
    $scope.userId='001-user';
    $scope.chat = ChatService.get(chatId,10);

  });
