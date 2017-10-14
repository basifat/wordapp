
(function () {
  'use strict';

  angular
    .module('wordapp.layout.controllers')
    .controller('SidebarController', SidebarController);

  SidebarController.$inject = ['$scope', 'Authentication'];


  function SidebarController($scope, Authentication) {
    var vm = this;

    vm.login = login;

    /**
    * @name logout
    */
    function login() {
      Authentication.isAuthenticated();
    }
  }
})();