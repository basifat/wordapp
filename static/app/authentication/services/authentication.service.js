/**
* Authentication
*/
(function () {
  'use strict';

  angular
    .module('wordapp.authentication.services')
    .factory('Authentication', Authentication);

  Authentication.$inject = ['$cookies', '$http'];

  /**
  * @namespace Authentication
  */
  function Authentication($cookies, $http) {
    /**
    * @name Authentication
    * @desc The Factory to be returned
    */
    var Authentication = {
      getAuthenticatedAccount: getAuthenticatedAccount,
      isAuthenticated: isAuthenticated,
      login: login,
      register: register,
      setAuthenticatedAccount: setAuthenticatedAccount,
      unauthenticate : unauthenticate,
      logout : logout,
      setCookieValues : setCookieValues,
      getCookieValues : getCookieValues,
      deleteCookie : deleteCookie,
    };
    return Authentication;

    /**
 * @name getAuthenticatedAccount

 */
  function getAuthenticatedAccount() {
    if (!$cookies.authenticatedAccount) {
      return;
    }
    //parse JSON into javascript object
    return JSON.parse($cookies.authenticatedAccount);
  }

  function getCookieValues() {
    if (!$cookies.form_data) {
      return;
    }
    //parse JSON into javascript object
    return JSON.parse($cookies.form_data);
  }

/**
 * @name isAuthenticated
 */
  function isAuthenticated() {

    //return Not not cookies i.e return opporsite of if there is no authenticated account
    return !!$cookies.authenticatedAccount;
  }

/**
 * @name setAuthenticatedAccount
 */
  function setAuthenticatedAccount(account) {

    $cookies.authenticatedAccount = JSON.stringify(account);
  }

  function setCookieValues(keyword, choice) {
    var form_data = ({keyword : keyword, choice : choice})
    $cookies.form_data = JSON.stringify(form_data);
  }
/**
 * @name unauthenticate
 */
  function unauthenticate() {
    delete $cookies.authenticatedAccount;
  }


  function deleteCookie() {
    delete $cookies.form_data;
  }
    ////////////////////

    /**
* @name register
*/

function register(email, password, keyword, choice) {
  var form_data = ({keyword : keyword, choice : choice })
  return $http.post('/api/v1/accounts/', {
    password: password,
    email: email,
    // keyword : keyword,
    // choice : choice,
    form_data :form_data
  }).then(registerSuccessFn, registerErrorFn);

  /**
  * @name registerSuccessFn
  */
  function registerSuccessFn(data, status, headers, config) {
    Authentication.setCookieValues(form_data);
    Authentication.login(email, password);
    
  }

  /**
  * @name registerErrorFn
  */
  function registerErrorFn(data, status, headers, config) {
    console.log(data.data);
    console.error('Epic failure!');

  }
}

    ////////////////////LOGIN

    function login(email, password) {
  return $http.post('/api/v1/auth/login/', {
    email: email, password: password
  }).then(loginSuccessFn, loginErrorFn);

  /**
   * @name loginSuccessFn
   */
  function loginSuccessFn(data, status, headers, config) {
    Authentication.setAuthenticatedAccount(data.data);
    
    if (!getCookieValues()){
      console.log(getCookieValues())
      window.location = '/orders/';
    }

    if (getCookieValues()){
      window.location = '/sample/';
    }
    
  }

  /**
   * @name loginErrorFn
   */
  function loginErrorFn(data, status, headers, config) {
    console.error('Epic failure!');
    console.log(data.data)
  }
}

/**
 * @name logout
 */
function logout() {
  return $http.post('/api/v1/auth/logout/')
    .then(logoutSuccessFn, logoutErrorFn);

  /**
   * @name logoutSuccessFn
   */
  function logoutSuccessFn(data, status, headers, config) {
    Authentication.unauthenticate();

    window.location = '/';
  }

  /**
   * @name logoutErrorFn
   */
  function logoutErrorFn(data, status, headers, config) {
    console.log(data.data)
  }
}

  }
})();