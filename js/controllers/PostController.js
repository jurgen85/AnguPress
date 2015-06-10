app.controller('PostCtrl', ['$scope', 'post', '$routeParams', function($scope, post, $routeParams) {
	if ($routeParams.id != '' && $routeParams.id != undefined) {
		post.get({ id: $routeParams.id}, function(data) {
			$scope.post = data;
		});
		
		$scope.deletePost = function() {
			post.delete({ id: $routeParams.id});	
		}		
	} else {
		post.query(function(data) {
	    	$scope.posts = data;
	  	});
	}
}]);