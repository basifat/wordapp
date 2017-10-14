/**
* Register controller
*/
(function () {
  'use strict';

  angular
    .module('wordapp.orders.controllers')
    .controller('OrderController', OrderController);

  OrderController.$inject = ['$location', '$scope', 'Authentication', 'Orders'];

  /**
  * @namespace RegisterController
  */
  function OrderController($location, $scope, Authentication, Orders) {
    var vm = this;
    vm.buyer;
    vm.get = get;
    vm.data;
    get();
    // activate();

    /**
    * @name register
    */
    function get() {

       if (Authentication.isAuthenticated()){
            vm.buyer = Authentication.getAuthenticatedAccount()
          }
        Orders.get(vm.buyer.email).then(function(response) {
          if (response) {
                vm.data = response.data

              }
          else {
              console.error(response.error)
                }
              })    
  }
}


  



})();