app.factory('page', ['$resource', function($resource) {
  return $resource('http://localhost/user-feedback-rest-api/wp-json/pages/:id');
}]);