(function () {
  'use strict';

  var app = angular
    .module('angularTest')
    .controller('BlogEditController', BlogEditController);


  /** @ngInject */
  function BlogEditController(Article, $stateParams) {
    var vm = this;
    vm.article = Article.get({
      id: $stateParams.id
    });
    vm.orderProp = 'title';
    console.log("BlogEditController");
    vm.submit = function () {
      vm.article.$update();

    }
  }
})();



