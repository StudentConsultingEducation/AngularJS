var app = angular.module("showhideModule", []);

app.controller("showhideController", function ($scope) {
    //Assignment 5
    $scope.show = true;

    $scope.Change = function () {
        $scope.show = !$scope.show;
    }
});