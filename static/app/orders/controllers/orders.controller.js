(function () {
  'use strict';

  angular
    .module('wordapp.orders.controllers')
    .controller('OrdersController', OrdersController);

  OrdersController.$inject = ['$scope', 'Orders'];

  /**
  * @namespace PostsController
  */
  function OrdersController($scope, Orders) {
    var vm = this;
    vm.orders = Orders.all();

     }
})();