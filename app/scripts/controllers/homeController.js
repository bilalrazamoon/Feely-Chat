'use strict';

/**
 * @ngdoc function
 * @name FeelyChat.controller:HomeController
 * @description
 * # HomeController
 */
angular.module('FeelyChat')
  .controller('HomeController', function ($scope, GroupService) {
    $scope.groups = GroupService;
    /*var groups = {};
    var userId = '001-user';
    var chatsRef = new Firebase(FirebaseURL + '/chats');
    var userGroupsRef = new Firebase(FirebaseURL + '/users/' + userId + '/groups');
    var usersRef = new Firebase(FirebaseURL + '/users');
    var groupsRef = new Firebase(FirebaseURL + '/groups/');
    $scope.groupsUsers = [];
    $scope.groups = groups;
    $firebaseArray(userGroupsRef).$watch(function (groupSnap) {
      if (groupSnap.event == 'child_added') {
        var group = groups[groupSnap.key] = {};
        group.users = {};

        var lastMessageQuery = chatsRef.child(groupSnap.key).limitToLast(1);
        /!*group.syncLastMessage = $firebaseArray(lastMessageQuery);
        group.syncLastMessage.$loaded().then(function (data) {
          group.lastMessage = data[0];
        });*!/
        $firebaseArray(lastMessageQuery).$loaded().then(function (data) {
          group.lastMessage = data[0];
          console.log(data);
        });

        /!*$firebaseArray(lastMessageQuery).$watch(function (messageSnap) {
          groups[groupSnap.key]['messageId'] = messageSnap.key;
          if (groups[groupSnap.key][messageSnap.key]) {
            var userQuery = usersRef.child(groups[groupSnap.key][messageSnap.key].from);
            groups[groupSnap.key][messageSnap.key]['user'] = $firebaseObject(userQuery);
          }
        });*!/

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
        /!*groups[groupSnap.key].userIds = $firebaseArray(groupsUsers);
        groups[groupSnap.key].users = [];
        $scope.$watch('groups.' + groupSnap.key + '.userIds', function (userIds) {
          var users = groups[groupSnap.key].users;

          users = users.filter(function (user) {
            return userIds.some(function (userId) {
              return user.$id = userId
            });
          });

          userIds.forEach(function (userId) {
            var exist = users.some(function (user) {
              return user.$id = userId
            });
            if (!exist) {
              users.push($firebaseObject(usersRef.child(userId)))
            }
          });
          groups[groupSnap.key].users = users;
        })*!/
      }else if(groupSnap.event == 'child_removed'){
        delete groups[groupSnap.key];
      }
      console.log(groups);
    });*/
    /*GroupService.get(userId)
     //.$loaded()
     .then(function (data) {
     groups = data;
     console.log("groups", groups);
     data.forEach(function (v, i) {
     MessageService.getLast(v.$id)
     //.$loaded()
     .then(function (data) {
     console.log("lastMessage", data);
     v.lastMessage = data;
     if (v.lastMessage[0])
     UserService.get(v.lastMessage[0].from)
     //.$loaded()
     .then(function (data) {
     console.log("user", data);
     v.user = data
     });
     }, function () {

     }, function (data) {
     console.log("lastMessage:updated", data);
     v.lastMessage = data;
     if (v.lastMessage[0])
     UserService.get(v.lastMessage[0].from)
     //.$loaded()
     .then(function (data) {
     console.log("user", data);
     v.user = data
     });
     })
     });
     console.log("groups", groups);
     $scope.groups = groups;
     });*/
  });
