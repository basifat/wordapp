/**
* Posts
*/
(function () {
  'use strict';

  angular
    .module('wordapp.orders.services')
    .factory('Orders', Orders);

  Orders.$inject = ['$http','$location'];

  /**
  * @namespace Orders
  */
  function Orders($http, $location) {
    var Orders = {
      all: all,
      create : create,
      get: get
    };

    return Orders;


    /**
    * @name all
    */
    function all() {
      return $http.get('/api/v1/orders/');
    }



    function get(email) {

      return $http.get('/api/v1/accounts/' + email + '/orders/' );
    
  
    }



    function create(info, keywords, comments, offer_option, price, total) {
      info = ({ 
        keywords : keywords, 
        comments : comments, 
        offer_option : offer_option, 
        price : price, 
      })

      return $http.post('/api/v1/orders/', { 
        info : info,
        total : total,
      }).then(createSuccessFn, createErrorFn);



    function createSuccessFn(data, status, headers, config) {
      console.log(data.data)
      window.location = '/orders';
      }

    /**
    * @name loginErrorFn
    */
    function createErrorFn(data, status, headers, config) {
      console.error(data);
      }
      }

    }

})();