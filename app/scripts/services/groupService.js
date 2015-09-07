'use strict';

/**
 * @ngdoc service
 * @name FeelyChat.GroupService
 * @description
 * # GroupService
 */
angular.module('FeelyChat')
  .factory('GroupService', function ($window, FirebaseURL, $firebaseArray, $firebaseObject, $rootScope) {

    var groups = {};
    var userId = $rootScope.userId.$id;
    var chatsRef = new Firebase(FirebaseURL + '/chats');
    var userGroupsRef = new Firebase(FirebaseURL + '/users/' + userId + '/groups');
    var usersRef = new Firebase(FirebaseURL + '/users');
    var groupsRef = new Firebase(FirebaseURL + '/groups/');

    $firebaseArray(userGroupsRef).$watch(function (groupSnap) {
      if (groupSnap.event == 'child_added') {
        var group = groups[groupSnap.key] = {};
        group.users = {};

        var lastMessageQuery = chatsRef.child(groupSnap.key).limitToLast(1);
        $firebaseArray(lastMessageQuery).$loaded().then(function (data) {
          group.lastMessage = data[0];
          console.log(data);
        });

        var groupsUsers = groupsRef.child(groupSnap.key);
        $firebaseArray(groupsUsers).$watch(function (snap) {
          if (snap.event == 'child_added') {
            group.users[snap.key] = $firebaseObject(usersRef.child(snap.key));
          } else if (snap.event == 'child_removed') {
            Object.keys(group.users).forEach(function (userId) {
              if (group.users[userId].$id == snap.key)
                delete group.users[userId]
            });
          }
        });
      } else if (groupSnap.event == 'child_removed') {
        delete groups[groupSnap.key];
      }
    });
    return groups;
  });
