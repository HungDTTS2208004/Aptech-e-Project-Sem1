var app = angular.module("myApp", []);
app.controller("homeController",function($scope){
    $scope.navShow = true;
    $scope.mobileProductDropdown = true;
    $scope.showOrHide = function(){
        $scope.navShow = !$scope.navShow;
    }
})