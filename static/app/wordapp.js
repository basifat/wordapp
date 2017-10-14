// (function () {
// 	'use strict';
angular
  .module('wordapp', [
  	'wordapp.routes',
  	'wordapp.config',
  	'wordapp.authentication',
  	'wordapp.layout',
    'wordapp.orders',
  	'wordapp.utils',
   'wordapp.profiles',
  	]);

 angular
	.module('wordapp.config', []);

angular
	.module('wordapp.routes', ['ngRoute']);

angular
	.module('wordapp')
	.run(run);

run.$inject = ['$http'];

function run($http) {
	$http.defaults.xsrfHeaderName = 'X-CSRFToken';
	$http.defaults.xsrfCookieName = 'csrftoken';
}






