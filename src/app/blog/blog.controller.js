(function() {
  'use strict';

  angular
    .module('angularTest')
    .controller('BlogListController', BlogListController);

  /** @ngInject */
  function BlogListController(Article) {
    var vm = this;
    vm.articles = Article.query();
    vm.orderProp = 'title';
  }

})();
