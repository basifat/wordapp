/**
* LoginController
*/
(function () {
  'use strict';

  angular
    .module('wordapp.authentication.controllers')
    .controller('IndexController', IndexController);

  IndexController.$inject = ['$location', '$scope', 'Authentication'];

  /**
  * @namespace LoginController
  */
  function IndexController($location, $scope, Authentication) {

    var vm = this;

    activate();

    function activate() {

      $location.url('/');
    }

  }
})();