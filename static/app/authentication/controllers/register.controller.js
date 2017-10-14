/**
* Register controller
*/
(function () {
  'use strict';

  angular
    .module('wordapp.authentication.controllers')
    .controller('RegisterController', RegisterController);

  RegisterController.$inject = ['$location', '$scope', 'Authentication'];

  /**
  * @namespace RegisterController
  */
  function RegisterController($location, $scope, Authentication) {
    var vm = this;

    vm.register = register;
    vm.names = [{'label' : "Sufficient $1", 'name': "SUFFICIENT"}, {'label': "Extended $1", 'name': "EXTENDED"}, {'label' : "Elaborate $1", 'name': "ELABORATE"}];
    vm.choice = vm.names[0];
  


    /**
    * @name register
    */
    function register() {
      Authentication.register(vm.email, vm.password, vm.keyword, vm.choice.name);
    }

    
    activate();

/**
 * @name activate
 */
function activate() {
  // If the user is authenticated, they should not be here.
  if (Authentication.isAuthenticated()) {
    $location.url('/');
  }
  
}

  }


})();