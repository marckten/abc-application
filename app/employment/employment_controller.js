(function() {
  var definitions = [
    '_',
    'employmentService',
    employmentController
  ];
  angular.module('abc.employment')
    .controller('employmentController', definitions);

  function employmentController(_, employmentService) {
    var vm = this;
    
    vm.employment = {};
    
      
    vm.employeselected = {};
    vm.employees = employmentService.getEmployees();
    vm.saveEmployee = saveEmployee;
    vm.deleteEmploye = deleteEmploye;
    vm.save = save;
    vm.edit = edit;

    vm.employee = {};
    vm.employeeFields = employmentService.getFields();

    function saveEmployee() {
      employmentService.addNew(vm.employees, vm.employee);
      vm.employment = {};
    }

    function save(idEmploye) {
      employmentService.updateEmploye(vm.employees, idEmploye, vm.employeselected);
    }

    function deleteEmploye(idEmploye) {
      employmentService.deleteEmployee(vm.employees, idEmploye, vm.employeselected);
    }

    function edit(idEmploye) {
      var employees = vm.employees;
      var index = employmentService.getIndexById(employees, idEmploye);

      employees[index].isEdit = true;

      vm.employeselected = _.clone(employees[index]);
    }
  }
})();