var app = angular.module('shopApp', []);

app.controller('shopController', function ($scope) {
    $scope.stock = [{ name: "Water", price: 13, description: "A water bottle from Loka" }, { name: "Water", price: 15, description: "A water bottle from Ramlösa" }, { name: "Coke", price: 14, description: "0.5l coke from Coca Cola" }, { name: "Pepsi", price: 13, description: "0.5l pepsi from pepsi" }, { name: "Sprite", price: 14, description: "0.5l Sprite from Coca Cola" }, { name: "Coke", price: 8, description: "0.33l coke from Coca Cola " }, { name: "Sprite", price: 8, description: "0.33l Sprite from Coca Cola" }, { name: "Water", price: 13, description: "A water bottle from Bonaqua" }]
    $scope.display = "";

});