(function () {
  'use strict';

  angular
    .module('wordapp.contents.services')
    .factory('Contents', Contents);

  Contents.$inject = ['$http'];

  /**
  * @namespace Contents
  */
  function Contents($http) {
    var Contents = {
      all: all,
      create: create,
    };
    return Contents;


     function all() {
      return $http.get('/api/v1/posts/');
    }


    function create(author, order_details, order_status, revisions) {
      return $http.post('/api/v1/posts/', {author:author, order_details:order_details, revisions:revisions, order_status:order_status
      }).then(createSuccessFn, createErrorFn);

    function createSuccessFn(data, status, headers, config) {
      window.location = '/';
    }


    function createErrorFn(data, status, headers, config) {
      console.error(data.data);
    }
    }

  }
})();
