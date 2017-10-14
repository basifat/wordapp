/**
* Register controller
* @namespace wordapp.authentication.controllers
*/
(function () {
  'use strict';

  angular
    .module('wordapp.orders.controllers')
    .controller('SampleController', SampleController);

  SampleController.$inject = ['$location', '$scope', 'Authentication', 'Orders', '$route'];

  /**
  * @namespace RegisterController
  */
  function SampleController($location, $scope, Authentication, Orders, $route) {
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
          Authentication.deleteCookie();
        }

        }


    

/**
 * @name activate
 */
    function activate() {
      
      vm.price = 25
      var cookie_data = Authentication.getCookieValues()
      vm.offer_option = ((cookie_data['keyword'].choice))
      console.log(vm.offer_option)

      
      if ((cookie_data['keyword'].choice) == vm.opt[0].label){
          vm.offer_option = vm.opt[0].label
          vm.price = 25;
          vm.keywords = (cookie_data['keyword'].keyword)
          vm.total = vm.price

      }

      if ((cookie_data['keyword'].choice) == vm.opt[1].label){
          vm.offer_option = vm.opt[1].label
          vm.price = 75;
          vm.keywords = (cookie_data['keyword'].keyword)
          vm.total = vm.price

      }

      if ((cookie_data['keyword'].choice) == vm.opt[2].label){
          vm.offer_option = vm.opt[2].label
          vm.price = 125;
          vm.keywords = (cookie_data['keyword'].keyword)
          vm.total = vm.price

      }


      
  }


}


})();