/**
* NavbarController
*/
(function () {
  'use strict';

  angular
    .module('wordapp.layout.controllers')
    .controller('NavbarController', NavbarController);

  NavbarController.$inject = ['$scope', 'Authentication'];

  /**
  * @namespace NavbarController
  */
  function NavbarController($scope, Authentication) {
    var vm = this;

    vm.logout = logout;

    /**
    * @name logout
    */
    function logout() {
      Authentication.logout();
    }
  }
})();