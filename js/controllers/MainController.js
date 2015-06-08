app.controller('MainCtrl', ['$scope', 'posts', function($scope, posts) {
	posts.success(function(data) {
    	$scope.posts = data;
  	});
}]);