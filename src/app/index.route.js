(function () {
  'use strict';

  angular
    .module('angularTest')
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .state('blog', {
        url: '/blog',
        templateUrl: 'app/blog/blog.html',
        controller: 'BlogListController',
        controllerAs: 'blog'
      })
      .state('blogView', {
        url: '/blog/:id',
        templateUrl: 'app/blog/blog_view/blog_view.html',
        controller: 'BlogViewController',
        controllerAs: 'blog'
      })
      .state('blogEdit', {
        url: '/blog/:id/edit',
        templateUrl: 'app/blog/blog_edit/blog_edit.html',
        controller: 'BlogEditController',
        controllerAs: 'blog'
      })
      .state('blogDelete', {
        url: '/blog/:id/delete',
        templateUrl: 'app/blog/blog_edit/blog_edit.html',
        controller: 'BlogDeleteController',
        controllerAs: 'blog'
      })
    ;

    $urlRouterProvider.otherwise('/');
  }

})();
