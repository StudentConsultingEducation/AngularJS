var app = angular.module('navApp', []);

app.controller('navController', function ($scope) {
    $scope.display = "text1";
    $scope.changedisplay = function (text) {
        $scope.display = text;
    }
});