(function () {
  'use strict';

  angular
    .module('wordapp.orders', [
      'wordapp.orders.controllers',
      'wordapp.orders.services',
      'wordapp.orders.directives',
    ]);

  angular
    .module('wordapp.orders.controllers', []);

   angular
    .module('wordapp.orders.directives', ['ngDialog']);

  angular
    .module('wordapp.orders.services', []);
})();