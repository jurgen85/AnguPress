var app = angular.module('AnguPress', ['ngSanitize', 'ngRoute', 'ngResource']);

app.config(function($routeProvider) {
	$routeProvider
		.when('/', {
			controller: 'MainCtrl',
			templateUrl: 'views/home.html'
		})
		.when('/posts/:id', {
			controller: 'PostCtrl',
			templateUrl: 'views/post.html'
		})
		.otherwise({
			redirectTo: '/'
		});
});