//weather controller
angular.module('myApp').controller('WeatherCtrl', WeatherCtrl);
WeatherCtrl.$inject = ['$scope', '$http'];

function WeatherCtrl($scope, $http) {
    $http.get('/weather').success(function (data) {
        $scope.weather = data;
    });
}