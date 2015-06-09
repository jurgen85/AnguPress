app.factory('post', ['$resource', function($resource) {
  return $resource('http://ring-zuid.php-dev.fundament.nl/wp-json/posts/:id');
}]);