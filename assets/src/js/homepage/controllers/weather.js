//weather controller
angular.module('homepageApp').controller('WeatherCtrl', WeatherCtrl);
WeatherCtrl.$inject = ['$scope', '$http'];

function WeatherCtrl($scope, $http) {
    $http.get('/weather').success(function (data) {
        $scope.weather = data;
    });
}