(function () {
  'use strict';

  angular
    .module('wordapp.contents.controllers')
    .controller('NewContentController', NewContentController);

  NewContentController.$inject = ['$location', '$scope', 'Contents', 'Authentication'];

  function NewContentController($location, $scope, Contents, Authentication) {
    var vm = this;
    vm.create = create;

    function create() {

	   if (Authentication.isAuthenticated()) {

	   		vm.author = Authentication.getAuthenticatedAccount().username
				   
			 console.log(vm.author)

		   Contents.create(vm.author, vm.order_details, vm.order_status, vm.revisions);
		}

	    
    }

    activate();

 function activate() {
 	console.log()

  	}

    }


})();

