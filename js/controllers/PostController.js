app.controller('PostCtrl', ['$scope', 'post', '$routeParams', function($scope, post, $routeParams) {
  // Original post binding to $scope.... try this new way of binding data to the $scope which may also give the ability to delete a post....?
	if ($routeParams.id != '') {
		post.get({ id: $routeParams.id}, function(data) {
			$scope.post = data;
		});
	} else {
		post.query(function(data) {
	    	$scope.posts = data;
	  	});
	}
	
  // Test if this works at home!!
  /*var currentPost = post.get({ id: $routeParams.id}, function(data) {
	currentPost.data = data;  
  });
  
  $scope.post = currentPost.data;
  
  $scope.deletePost = function() {
	  currentPost.$delete();
  };*/
}]);