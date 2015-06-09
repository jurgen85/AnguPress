var app = angular.module('AnguPress', ['ngSanitize', 'ngRoute', 'ngResource']);

app.run( ['$rootScope', function($rootScope) {
	 
	// Variables defined by wp_localize_script
	$rootScope.apiUrl = "http://localhost/AnguPress/wp-json";
 
}]);


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