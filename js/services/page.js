app.factory('page', ['$resource', function($resource) {
  return $resource($scope.apiUrl + '/page/:id');
}]);