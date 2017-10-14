

/**
* order
*/
(function () {
  'use strict';

  angular
    .module('wordapp.orders.directives')
    .directive('order', order);

  /**
  * @namespace Post
  */
  function order() {
    /**
    * @name directive
    */
    var directive = {
      controller: 'OrderController',
      controllerAs: 'vm',
      restrict: 'E',
      scope: {
        data: '='
      },
      templateUrl: '/static/templates/orders/order.html'
    };

    return directive;
  }
})();