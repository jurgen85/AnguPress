app.factory('post', ['$resource', function($resource) {
  return $resource('http://localhost/user-feedback-rest-api/wp-json/posts/:id');
}]);