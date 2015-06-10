app.controller('UserCtrl', ['$scope', 'user', '$routeParams', function($scope, user, $routeParams) {
  user.get({ id: 2}, function(data) {
    $scope.user = data;
  });
}]);