var app = angular.module("myApp", []);
app.controller("navController",function($scope){
    $scope.navShow = true;
    $scope.mobileProductDropdown = true;
    $scope.mobileCollectionDropdown = true;
    $scope.Login = false;
})
app.controller("productsController",function ($scope) {
    $scope.brandFilterSH = true;
    $scope.cateFilterSH = true;
    $scope.colorFilterSH = true;
})
app.controller("productInfoController",function ($scope) {
    $scope.descriptionShow = false;
})