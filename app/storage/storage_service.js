(function() {
  var definitions = [
    '_',
    storageService
  ];
  angular.module('abc.storage')
    .factory('storageService', definitions);

  function storageService(_) {
    return {
      storageItem: storageItem,
      getItem: getItem
    };

    function storageItem(bucket, item) {
      localStorage.setItem(bucket, JSON.stringify(item));
    }

    function getItem(bucket) {
      var item = localStorage.getItem(bucket);
      return JSON.parse(item);
    }
  }
})();