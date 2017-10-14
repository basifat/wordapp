/**
* ProfileController
*/
(function () {
  'use strict';

  angular
    .module('wordapp.profiles.controllers')
    .controller('ProfileController', ProfileController);

  ProfileController.$inject = ['$location', '$routeParams', 'Orders', 'Profile'];

  /**
  * @namespace ProfileController
  */
  function ProfileController($location, $routeParams, Orders, Profile) {
    var vm = this;

    vm.profile = undefined;
    vm.posts = [];

    activate();

    /**
    * @name activate
    */
    function activate() {
      var email = $routeParams.email.substr(1);

      Profile.get(email).then(profileSuccessFn, profileErrorFn);
      Orders.get(email).then(ordersSuccessFn, ordersErrorFn);

      /**
      * @name profileSuccessProfile
      */
      function profileSuccessFn(data, status, headers, config) {
        vm.profile = data.data;
      }


      /**
      * @name profileErrorFn
      */
      function profileErrorFn(data, status, headers, config) {
        $location.url('/');
        console.error('That user does not exist.');
      }


      /**
        * @name postsSucessFn
        */
      function ordersSuccessFn(data, status, headers, config) {
        console.log("ordersSuccessFn")
      }


      /**
        * @name postsErrorFn
        */
      function ordersErrorFn(data, status, headers, config) {
        console.error(data.data.error);
      }
    }
  }
})();