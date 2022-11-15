var app = angular.module("myApp", []);
app.controller("navController",function($scope){
    $scope.navShow = true;
    $scope.mobileProductDropdown = true;
    $scope.mobileCollectionDropdown = true;
    $scope.Login = false;
})