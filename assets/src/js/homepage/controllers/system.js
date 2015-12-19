// system controller
angular.module('homepageApp').controller('SystemCtrl', SystemCtrl);

SystemCtrl.$inject = ['$scope', '$http', '$interval'];

function SystemCtrl($scope, $http, $interval) {
    $http.get('/system').success(function (data) {
        $scope.system = data;
    });

    function update() {
        $http.get('/system', { ignoreLoadingBar: true }).success(function (data) {
            $scope.system = data;
        });
    }

    // update every 5 seconds
    $interval(update, 5000);
}