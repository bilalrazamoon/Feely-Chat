'use strict';

/**
 * @ngdoc service
 * @name FeelyChat.ChatService
 * @description
 * # ChatService
 */
angular.module('FeelyChat')
  .factory('ChatService', function ($window, GroupService, FirebaseURL, $firebaseArray, $firebaseObject) {
    var ref = new Firebase(FirebaseURL + '/chats');
    return {
      get: function (id,limit) {
        var group = GroupService[id];
        var query = ref.child(id).limitToLast(limit);
        group.messages = $firebaseArray(query);
        return group;
      }
    };
  });
