app.controller('HomeCtrl', ['$scope', 'post', '$routeParams', function($scope, page, $routeParams) {
  // Original post binding to $scope.... try this new way of binding data to the $scope which may also give the ability to delete a post....?
  page.get({ id: 2}, function(data) {
    $scope.homePage = data;
  });
}]);