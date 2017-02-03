(function(window, angular) {
  var
    dependencies;

  dependencies = [];

  angular
    .module('abc.utils.lodash', dependencies)
    .factory('_', function() {
      return window._;
    });
})(window, angular);