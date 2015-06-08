app.controller('PostCtrl', ['$scope', 'post', '$routeParams', function($scope, post, $routeParams) {
  post.get({ id: $routeParams.id}, function(data) {
    $scope.post = data;
  });
}]);