(function() {
  var definitions = [
    '_',
    'localStorageService',
    storageService
  ];
  angular.module('abc.storage')
    .factory('storageService', definitions);

  function storageService(_, localStorageService) {
    return {
      storageItem: storageItem,
      getItem: getItem
    };

    function storageItem(bucket, item) {
      localStorageService.set(bucket, JSON.stringify(item));
    }

    function getItem(bucket) {
      var item = localStorageService.get(bucket);
      return JSON.parse(item);
    }
  }
})();