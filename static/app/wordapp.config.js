(function () {
  'use strict';

  angular
    .module('wordapp.config')
    .config(config);

  config.$inject = ['$locationProvider'];

  /**
  * @name config
  */
  function config($locationProvider) {
    $locationProvider.html5Mode(true);
    $locationProvider.hashPrefix('!');
  }
})();