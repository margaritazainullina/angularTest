(function () {
  'use strict';

  var app = angular
    .module('angularTest')
    .controller('BlogDeleteController', BlogDeleteController);

  /** @ngInject */
  function BlogDeleteController(Article, $stateParams) {
    console.log("delete article with id:" + $stateParams.id);
    Article.delete($stateParams.id);

    /*
     var vm = this;
     vm.article = Article.get({
     id: $stateParams.id
     });
     vm.orderProp = 'title';
     vm.submit = function () {
     console.log(vm);
     alert(angular.toJson(vm.form1));
     }*/
  }
})();



