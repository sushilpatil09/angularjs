angular.module('loginApp',[])
.controller('logincontroller',function($scope) {
    $scope.user = {};
    $scope.login = function() {
        alert("login successful!\nusername: " + $scope.user.username);
  };
});
