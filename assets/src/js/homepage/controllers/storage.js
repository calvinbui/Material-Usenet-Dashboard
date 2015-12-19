// storage devices controller
angular.module('homepageApp').controller('StorageCtrl', StorageCtrl);

StorageCtrl.$inject = ['$scope', '$http'];

function StorageCtrl($scope, $http) {
    $http.get('/storage').success(function (data) {
        $scope.disks = data;
    });
}