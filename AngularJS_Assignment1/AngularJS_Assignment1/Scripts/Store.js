//Assignment 1
var app = angular.module("storeModule", []);
//Assignment 2 & 3
var item = { Price: 100, Name: "Frozen Chicken", Description: "2kg frozen chicken from kungsfågeln" };

//Assignment 4
app.controller("storeController", function ($scope) {
    //Assignment 5
    $scope.product = item;
});