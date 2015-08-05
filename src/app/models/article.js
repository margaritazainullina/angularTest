(function() {
  'use strict';

  angular
    .module('angularTest')
    .factory('Article', Article);

   /** @ngInject */
  function Article($resource) {
    return  $resource("/articles.json/:id", {id: '@id'}, {
      get: {
        url: '/articles/:id.json',
        method: 'GET'
      },
      update: {
        url: '/articles/:id.json/edit',
        method: 'PUT'
      },
      delete: {
        url: '/articles/:id.json/delete',
        method: 'DELETE'
      },
      create: {
        url: '/articles/create',
        method: 'POST'
      }
    });
  }

})();
