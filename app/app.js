/*global angular*/
(function () {
  'use strict';

  angular
    .module('angularNewRouterExample', ['hello', 'home', 'ngNewRouter'])
    .config(function ($componentLoaderProvider) {
      $componentLoaderProvider.setTemplateMapping(function (name) {
        return {
          home: 'app/home/home.tpl.html',
          hello: 'app/hello/hello.tpl.html'
        }[name];
      });
    })
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
