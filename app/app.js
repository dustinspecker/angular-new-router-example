/*global angular*/
(function () {
  'use strict';

  angular
    .module('angularNewRouterExample', ['hello', 'home', 'ngNewRouter'])
    .controller('MainController', function ($router) {
      this.header = 'TITLE';
      $router.config([
        {
          path: '/', component: 'home'
        },
        {
          path: '/hello', component: 'hello'
        }
      ]);
    });
})();
