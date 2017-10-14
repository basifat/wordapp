(function () {
  'use strict';

  angular
    .module('wordapp.authentication', [
      'wordapp.authentication.controllers',
      'wordapp.authentication.services'
    ]);

  angular
    .module('wordapp.authentication.controllers', []);

  angular
    .module('wordapp.authentication.services', ['ngCookies']);
})();