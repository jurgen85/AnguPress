app.factory('posts', ['$http', function($http) {
  return $http.get('http://localhost/user-feedback-rest-api/wp-json/posts')
     .success(function(data) {
       return data;
     })
     .error(function(data) {
       return data;
     });
}]);