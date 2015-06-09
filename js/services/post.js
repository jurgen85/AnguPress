app.factory('post', ['$resource', function($resource) {
  return $resource($scope.apiUrl + '/posts/:id');
}]);