/**
* Profile
*/
(function () {
  'use strict';

  angular
    .module('wordapp.profiles.services')
    .factory('Profile', Profile);

  Profile.$inject = ['$http'];

  /**
  * @namespace Profile
  */
  function Profile($http) {
    /**
    * @name Profile
\\
    */
    var Profile = {
      destroy: destroy,
      get: get,
      update: update
    };

    return Profile;

    /////////////////////

    /**
    * @name destroy
    */
    function destroy(profile) {
      return $http.delete('/api/v1/accounts/' + profile.id + '/');
    }


    /**
    * @name get
    */


    function get(email) {
      return $http.get('/api/v1/accounts/' + email + '/');
    }

    /**
    * @name update
    */
    function update(profile) {
      return $http.put('/api/v1/accounts/' + profile.email + '/', profile);
    }
  }
})();