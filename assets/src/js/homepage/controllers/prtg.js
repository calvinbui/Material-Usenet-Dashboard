// prtg controller
angular.module('homepageApp').controller('PRTGCtrl', PRTGCtrl);

PRTGCtrl.$inject = ['$scope', '$http', '$sce'];

function PRTGCtrl($scope, $http, $sce) {
    $http.get('/prtg_map').success(function (data) {
        // sce prevents any https errors
        $scope.prtg = $sce.trustAsResourceUrl(data);
    });
}