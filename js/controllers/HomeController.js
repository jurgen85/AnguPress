app.controller('HomeCtrl', ['$scope', 'page', '$routeParams', function($scope, page, $routeParams) {
  page.get({ id: 2}, function(data) {
    $scope.homePage = data;
  });
}]);