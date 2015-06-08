app.controller('PostCtrl', ['$scope', 'posts', '$routeParams', function($scope, posts, $routeParams) {
  posts.success(function(data) {
    $scope.postData = data[$routeParams.id];
    
    $scope.postId = $routeParams.id;
  });
}]);