'use strict';

/**
 * @ngdoc service
 * @name FeelyChat.UserService
 * @description
 * # UserService
 */
angular.module('FeelyChat')
  .factory('UserService', function($window, FirebaseURL, $firebaseArray) {
    var ref = new Firebase(FirebaseURL+'/users');
    return {
      getUsers: function () {
        return $firebaseArray.(ref)
      },
      getUserById: function (id) {
        return $firebaseArray.(ref.child(id))
      }
    };

  });

