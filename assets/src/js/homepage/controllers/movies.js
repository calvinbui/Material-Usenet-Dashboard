// movies controller for couchpotato
angular.module('homepageApp').controller('MoviesCtrl', MoviesCtrl);

MoviesCtrl.$inject = ['$scope', '$http'];

function MoviesCtrl($scope, $http) {
    $http.get('/couchpotato_api_comingsoon').success(function (data) {
        $scope.moviescomingsoon = data;
    });

    $http.get('/couchpotato_api_downloaded').success(function (data) {
        $scope.moviesdownloaded = data;
    });

    // slider configuration
    $scope.slickConfig = {
        slidesToShow: 4,
        slidesToScroll: 3,
        variableWidth: true,
        infinite: true,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ],
        prevArrow: "<div class='slick-prev mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--fab mdl-button--mini-fab mdl-button--colored'><i class='material-icons'>chevron_left</i></div>",
        nextArrow: "<div class='slick-next mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--fab mdl-button--mini-fab mdl-button--colored'><i class='material-icons'>chevron_right</i></div>"
    };
}