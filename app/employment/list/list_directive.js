(function() {
  var definitions = [
    employmentList
  ];

  angular.module('abc.employment.list')
    .directive('employmentList', definitions);

  function employmentList() {
    return {
      restrict: 'AE',
      scope: {
        delete: '&delete',
        save: '&save',
        edit: '&edit',
        employeselected: '=employeselected',
        employments: '=employments',
        template: '='
      },
      templateUrl: 'employment/list/list_template.html'
    };
  }
})();