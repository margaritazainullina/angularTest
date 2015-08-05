(function () {
  'use strict';

  var app = angular
    .module('angularTest')
    .controller('BlogEditController', BlogEditController);

  app.directive('validation', function () {
    return {
      require: 'ngModel',
      link: function(scope, elm, attrs, ctrl) {
        ctrl.$parsers.unshift(function(model1) {
          console.log(model1);

          if (/mimimi/.test(model1)) {
            ctrl.$setValidity('model1', true);
            return "valid";
          } else {
            ctrl.$setValidity('model1', false);
            return undefined;
          }
        });
      }
    };
  });

  /** @ngInject */
  function BlogEditController(Article, $stateParams) {
    var vm = this;
    vm.article = Article.get({
      id: $stateParams.id
    });
    vm.orderProp = 'title';
    vm.submit = function () {
      console.log(vm);
      alert(angular.toJson(vm.form1));
    }
  }
})();

(function () {
  'use strict';

  angular
    .module('angularTest')
    .controller('FormController', FormController);

  function FormController($scope, Article) {
    var vm = this;
    $scope.submit = function () {
      alert(angular.toJson($scope.form1));
    }
    console.log(Article);
  }
})();



