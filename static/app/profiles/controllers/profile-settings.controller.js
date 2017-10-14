/**
* ProfileSettingsController
*/
(function () {
  'use strict';

  angular
    .module('wordapp.profiles.controllers')
    .controller('ProfileSettingsController', ProfileSettingsController);

  ProfileSettingsController.$inject = ['$location', '$routeParams', 'Authentication', 'Profile'];

  /**
  * @namespace ProfileSettingsController
  */
  function ProfileSettingsController($location, $routeParams, Authentication, Profile) {
    var vm = this;

    vm.profile = undefined;
    vm.destroy = destroy;
    vm.update = update;

    activate();


    /**
    * @name activate
    */
    function activate() {
      var authenticatedAccount = Authentication.getAuthenticatedAccount();
      var email = $routeParams.email;

      if (!authenticatedAccount) {
        $location.url('/');
        console.error('You are not authorized to view this page.');
      } else {

        if (authenticatedAccount.email !== email) {
          $location.url('/');
          console.error('You are not authorized to view this page.');
        }
      }

      Profile.get(email).then(profileSuccessFn, profileErrorFn);

      /**
      * @name profileSuccessFn
      */
      function profileSuccessFn(data, status, headers, config) {
        vm.profile = data.data;
        console.log(vm.profile)
      }

      /**
      * @name profileErrorFn
      */
      function profileErrorFn(data, status, headers, config) {
        $location.url('/');
        console.error('That user does not exist.');
      }
    }


    /**
    * @name destroy
    */
    function destroy() {
      Profile.destroy(vm.profile).then(profileSuccessFn, profileErrorFn);

      /**
      * @name profileSuccessFn
      */
      function profileSuccessFn(data, status, headers, config) {
        Authentication.unauthenticate();
        window.location = '/';
        console.error('Your account has been deleted.');
      }


      /**
      * @name profileErrorFn
      */
      function profileErrorFn(data, status, headers, config) {
        console.error(data.error);
      }
    }


    /**
    * @name update
    */
    function update() {
      Profile.update(vm.profile).then(profileSuccessFn, profileErrorFn);

      /**
      * @name profileSuccessFn
      */
      function profileSuccessFn(data, status, headers, config) {

        console.log('Your profile has been updated.')
      }


      /**
      * @name profileErrorFn
      */
      function profileErrorFn(data, status, headers, config) {
        console.log(data.error)
      }
    }
  }
})();