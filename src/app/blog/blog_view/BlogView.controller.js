(function() {
  'use strict';

  angular
    .module('angularTest')
    .controller('BlogViewController', BlogViewController);

  /** @ngInject */
  function BlogViewController(Article, $stateParams) {
    var vm = this;
    vm.article = Article.get({id: $stateParams.id});
   // console.log(vm.article );
    vm.orderProp = 'title';
  }

})();
