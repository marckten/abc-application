(function() {
  var definitions = [
    '_',
    'storageService',
    employmentService
  ];

  angular.module('abc.employment')
    .factory('employmentService', definitions);

  function employmentService(_, storageService) {
    return {
      getEmployees: getEmployess,
      addNew: addNew,
      getIndexById: getIndexById,
      updateEmploye: updateEmploye,
      deleteEmployee: deleteEmployee
    };

    function getEmployess() {
      return storageService.getItem('employments') || [];
    }

    function addNew(employees, newEmployee) {
      var last = _.last(employees);
      var id;

      if (last) {
        id = last.id + 1;
      }
      else {
        id = 1;
      }

      if (_.isUndefined(newEmployee.name) || _.isUndefined(newEmployee.role)) {
        return false;
      }

      var employee = {
        id: id,
        isEdit: false,
        name: newEmployee.name,
        role: newEmployee.role
      };

      employees.push(employee);

      storageService.storageItem('employments', employees);

      return true;
    }

    function updateEmploye(employees, id, employeeUpdated) {
      var index = getIndexById(employees, id);

      if (_.isEmpty(employeeUpdated.name) || _.isEmpty(employeeUpdated.role)) {
        return false;
      }

      employees[index].isEdit = false;
      employees[index].name = employeeUpdated.name;
      employees[index].role = employeeUpdated.role;

      storageService.storageItem('employments', employees);

      return true;
    }

    function deleteEmployee(employees, id) {
      var index = getIndexById(employees, id);
      employees.splice(index, 1);
      storageService.storageItem('employments', employees);
    }

    function getIndexById(employees, id) {
      return _.findIndex(employees, function(e) {
        return e.id === id;
      });
    }
  }
})();