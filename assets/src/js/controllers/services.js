// sidenav services
angular.module('myApp').controller('ServiceCtrl', ServiceCtrl);

ServiceCtrl.$inject = ['$scope', '$http'];

function ServiceCtrl($scope, $http) {
    $http.get('/services').success(function (data) {
        $scope.services = data;
    });

    /** Legacy code for checking if anything is down
     $scope.closed = function() {
            for (service in $scope.services)
                if ($scope.services[service].status == "closed")
                    return true;
            return false;
    } **/
}