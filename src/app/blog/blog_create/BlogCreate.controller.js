(function () {
  'use strict';

  var app = angular
    .module('angularTest')
    .controller('BlogCreateController', BlogCreateController);

  /** @ngInject */
  function BlogCreateController(Article, $stateParams) {
    var vm = this;
    vm.article = new Article();

    vm.submit = function () {
      console.log(vm)
      vm.article.$save();
    }
  }
})();
