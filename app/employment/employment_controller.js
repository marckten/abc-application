(function() {
  var definitions = [
    '_',
    '$scope',
    'employmentService',
    employmentController
  ];
  angular.module('abc.employment')
    .controller('employmentController', definitions);

  function employmentController(_, $scope, employmentService) {
    $scope.employment = {};
    var self = this;

    $scope.employeselected = {};
    $scope.employees = employmentService.getEmployees();
    $scope.saveEmployee = saveEmployee;
    $scope.deleteEmploye = deleteEmploye;
    $scope.save = save;
    $scope.edit = edit;

    function saveEmployee() {
      var result = employmentService.addNew($scope.employees, $scope.employment);
      if (!result) {
        alert('You need to fill the fields');
      }
      else {
        $scope.employment = {};
      }
    }

    function save(idEmploye) {
      var result = employmentService.updateEmploye($scope.employees, idEmploye, $scope.employeselected);
      if (!result) {
        alert('You need to fill the fields');
      }
    }

    function deleteEmploye(idEmploye) {
      employmentService.deleteEmployee($scope.employees, idEmploye, $scope.employeselected);
    }

    function edit(idEmploye) {
      var employees = $scope.employees;
      var index = employmentService.getIndexById(employees, idEmploye);

      employees[index].isEdit = true;

      $scope.employeselected = _.clone(employees[index]);
    }
  }
})();