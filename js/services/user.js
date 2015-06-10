app.factory('user', ['$resource', function($resource) {
  return $resource('http://localhost/user-feedback-rest-api/wp-json/users/:id');
}]);