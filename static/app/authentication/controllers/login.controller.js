/**
* @namespace wordapp.authentication.controllers
*/
(function () {
  'use strict';

  angular
    .module('wordapp.authentication.controllers')
    .controller('LoginController', LoginController);

  LoginController.$inject = ['$location', '$scope', 'Authentication'];

  /**
  * @namespace LoginController
  */
  function LoginController($location, $scope, Authentication) {
    //vm is an externally available variable of LoginController
    var vm = this;

    vm.login = login;

    activate();

    function activate() {
      if (Authentication.isAuthenticated()) {
        $location.url('/');
      }
    }

    /*
    * Log in the user in
    */
    function login() {
      Authentication.login(vm.email, vm.password);

    }
  }
})();