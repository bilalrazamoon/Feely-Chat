'use strict';

/**
 * @ngdoc service
 * @name FeelyChat.UserService
 * @description
 * # UserService
 */
angular.module('FeelyChat')
  .factory('UsersService', function ($window, FirebaseURL, $firebaseArray, $firebaseObject, $rootScope, $log) {
    var currentUserId = $rootScope.user.$id,
      usersRef = new Firebase(FirebaseURL + '/users'),
      groupsRef = new Firebase(FirebaseURL + '/groups/'),
      friends = {};
    return {
      getAll: function () {
        return $firebaseArray(usersRef)
      },
      /*get: function (id) {
       var deferred = $q.defer();
       var query = ref.child(id);
       $firebaseArray(query).$watch(function (event) {
       console.log(event);
       $firebaseObject(query).$loaded()
       .then(function (data) {
       deferred.resolve(data)
       })
       });
       return deferred.promise;
       },*/
      getFriends: function () {
        if (Object.keys(friends).length) return friends;
        var query = usersRef.child(currentUserId).child('friends');
        var userIds = $firebaseObject(query);
        $firebaseArray(query).$watch(function (snap) {
          if (snap.event == 'child_added') {
            if (userIds[snap.key] === true)
              friends[snap.key] = $firebaseObject(usersRef.child(snap.key));
          } else if (snap.event == 'child_removed') {
            delete friends[snap.key];
          }
        });
        return friends;
      },
      startChat: function (userId) {
        var query = groupsRef
          .orderByChild("type")
          .equalTo("oto")
          .orderByChild("members")
          .equalTo(userId);
        $firebaseArray(query).$loaded()
          .then(function (data) {
            $log.log(data)
          });
      }
    };
  });
