(function () {
  'use strict';

  angular
    .module('wordapp.routes')
    .config(config);

  config.$inject = ['$routeProvider'];

  /**
  * @name config
  */
  function config($routeProvider) {
    $routeProvider.when('/register', {
      controller: 'RegisterController', 
      controllerAs: 'vm',
      templateUrl: '/static/templates/authentication/register.html'
    }).when('/login', {
      controller: 'LoginController',
      controllerAs: 'vm',
      templateUrl: '/static/templates/authentication/login.html'
    }).when('/sample', {
      controller: 'SampleController',
      controllerAs: 'vm',
      templateUrl: '/static/templates/orders/sample-order.html'
    }).when('/new', {
      controller: 'CreateController',
      controllerAs: 'vm',
      templateUrl: '/static/templates/orders/new-order.html'
    }).when('/orders', {
      controller: 'OrderController',
      controllerAs: 'vm',
      templateUrl: '/static/templates/orders/orders.html'
    }).when('/:email', {
      controller: 'ProfileController',
      controllerAs: 'vm',
      templateUrl: '/static/templates/profiles/profile.html'
    }).when('/:email/settings', {
      controller: 'ProfileSettingsController',
      controllerAs: 'vm',
      templateUrl: '/static/templates/profiles/settings.html'
    }).when('/', {
      controller: 'IndexController',
      controllerAs: 'vm',
      templateUrl: '/static/templates/layout/index.html'
     }).when('/', {
      controller: 'RegisterController',
      controllerAs: 'vm',
      templateUrl: '/static/templates/layout/index.html'
    }).otherwise('/');
    
  }
})();