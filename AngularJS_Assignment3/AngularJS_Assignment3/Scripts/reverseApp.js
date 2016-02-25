var app = angular.module("reverseApp", []);

app.controller("reverseController", function ($scope) {
    $scope.text = "avav";
    $scope.reversedtext = "";

    $scope.reverse = function (text) {
        $scope.reversedtext = "";
        var i = text.length;
        while (i > 0) {
            $scope.reversedtext += text[i - 1];
            i--;
        }
    };

});