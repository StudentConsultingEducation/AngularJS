var app = angular.module('intervalApp', []);

app.controller('intervalController', ['$scope', '$interval', function ($scope, $interval) {

    $scope.time = 10;
    var stop;

    $scope.countdown = function () {
        if (angular.isDefined(stop)) return;

        stop = $interval(function () {
            if ($scope.time > 0) {
                $scope.time--;
            } else {
                $scope.stopTimer;
            }
        }, 1000);
    };
    $scope.stopTimer = function () {
        if (angular.isDefined(stop)) {
            $interval.cancel(stop);
            stop = undefined;
        }
    };

}]);