(function() {
  var
    definitions;

  definitions = [
    employmentForm
  ];

  angular.module('abc.employment.form')
    .directive('employmentForm', definitions);

  function employmentForm() {
    return {
      restrict: 'AE',
      scope: {
        employment: '=employment'
      },
      templateUrl: 'employment/form/form_template.html'
    };
  }
})();