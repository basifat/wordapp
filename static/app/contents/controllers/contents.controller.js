(function () {
  'use strict';

  angular
    .module('wordapp.contents.controllers')
    .controller('ContentsController', ContentsController);

  ContentsController.$inject = ['$scope', 'Contents'];

  /**
  * @namespace PostsController
  */
  function ContentsController($scope, Contents) {
    var vm = this;


    //activate();

     function activate() {
      Contents.all().then(function(response){

        if (response) 
          {
              console.log(response.data)
              vm.go = response.data 

          } 

            }, function(error)
            {
             console.log("you fucked up")
              // window.location = '/';
              
            }

)
    }

     }
})();