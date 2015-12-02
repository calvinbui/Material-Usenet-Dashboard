// controls the loading dots and bar
angular.module('myApp').controller('LoadingCtrl', LoadingCtrl);

LoadingCtrl.$inject = ['$scope', '$rootScope', 'uiCalendarConfig', '$timeout'];

function LoadingCtrl($scope, $rootScope) {
    // using the angular loading bar rootscope broadcast to know when all HTTP requests are finished
    $rootScope.$on('cfpLoadingBar:completed', function() {
        // broadcast that everything has loaded
        $scope.loaded = true;
        $scope.$broadcast('loaded');
    });
}