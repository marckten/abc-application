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
      deleteEmployee: deleteEmployee,
      getFields: getFields
    };

    function getEmployess() {
      return storageService.getItem('employments') || [];
    }

    function addNew(employees, newEmployee) {
      var last = _.last(employees);
      var id= last ? last.id + 1: 1;

      var employee = {
        id: id,
        isEdit: false,
        name: newEmployee.name,
        role: newEmployee.role
      };

      employees.push(employee);

      storageService.storageItem('employments', employees);

    }

    function updateEmploye(employees, id, employeeUpdated) {
      var index = getIndexById(employees, id);

      employees[index].isEdit = false;
      employees[index].name = employeeUpdated.name;
      employees[index].role = employeeUpdated.role;

      storageService.storageItem('employments', employees);
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

    function getFields(){
      return [
        {
            key: 'name',
            type: 'input',
            templateOptions: {
                type: 'text',
                label: 'Name',
                placeholder: 'Enter the name',
                required: true
            }
        },
        {
            key: 'role',
            type: 'input',
            templateOptions: {
                type: 'text',
                label: 'Role',
                placeholder: 'Enter the role',
                required: true
            }
        }
      ];
    }
  }
})();