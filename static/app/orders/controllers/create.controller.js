/**
* Register controller
*/
(function () {
  'use strict';

  angular
    .module('wordapp.orders.controllers')
    .controller('CreateController', CreateController);

  CreateController.$inject = ['$location', '$scope', 'Authentication', 'Orders', '$route'];

  /**
  * @namespace RegisterController
  */
  function CreateController($location, $scope, Authentication, Orders, $route) {
    var vm = this;
    vm.keywords;
    vm.create = create;
    vm.opt = [{'label' : "SUFFICIENT"}, {'label': "EXTENDED"}, {'label' : "ELABORATE"}];


    $scope.changedValue = function(item) {
        if (item == vm.opt[0]){
          vm.price = 25
          vm.offer_option = vm.opt[0].label
          return vm.price
        }

        if (item == vm.opt[1]){
           vm.price = 75
           vm.offer_option = vm.opt[1].label
           return vm.price
        }

        if (item == vm.opt[2]){
           vm.price = 125
           vm.offer_option = vm.opt[2].label
           return vm.price
        }
      }

    activate();

    /**
    * @name register
    */
    function create() {

      if (Authentication.isAuthenticated()){

          vm.buyer = Authentication.getAuthenticatedAccount()

          Orders.create(vm.buyer, vm.keywords, vm.comments, vm.offer_option, vm.price, vm.total);

        }

        }


    

/**
 * @name activate
 */
    function activate() {
  
      
  }


}


})();