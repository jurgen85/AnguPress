app.controller('MainCtrl', ['$scope', 'post', function($scope, post) {
	post.query(function(data) {
    	$scope.posts = data;
  	});
}]);