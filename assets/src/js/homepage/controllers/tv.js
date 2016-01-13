// sonarr controller
angular.module('homepageApp').controller('TVCtrl', TVCtrl);

TVCtrl.$inject = ['$scope', '$http', 'uiCalendarConfig', '$timeout', '$compile'];

function TVCtrl($scope, $http, uiCalendarConfig, $timeout, $compile){
    // initiate ui-calendar / fullcalendar
    $scope.tvShows = [];

    // push data into it from the route
    $http.get('/sonarr_api').success(function (data) {
        $scope.tvShows.push(data);
    });

    /* TOOL TIPS */
    $scope.eventRender = function(show, element, view) {
        /*
        qtip-content or qtip: Content that will appear in the tip
        qtip-title: Title that will appear in the tip
        qtip-my: position of the tip arrow - optional: default to bottom center
        qtip-at: position of the tip - optional: default to top center
        qtip-class: class to use on the tip - optional: default to qtip
        qtip-visible: a scope variable to trigger the visibility from external
        */
        element.attr({
            'qtip-class': 'qtip-tipsy qtip-shadow qtip-rounded',
            'qtip':
                '<img class="poster mdl-shadow--4dp" src="' + show.poster + '"/>' + // image
                '<div class="show-overview">' +
                    show.title + '</br>' + //show name
                    ' S' + show.season + ', E' + show.episode + '</br>' + //season + episode
                    show.overview + //episode overview
                '</div>'
            ,
            'qtip-my': 'top center', // where to emerge from
            'qtip-at': 'bottom center', // where to show
            'qtip-adjust-method' : 'shift'
        });
        $compile(element)($scope);
    };

    // ui calendar configuration
    $scope.uiConfig = {
        calendar:{
            viewRender: function(view,element) {
                var now = new Date();
                var end = new Date();
                var start = new Date();
                start.setDate(now.getDate() - 14); //Adjust as needed
                end.setDate(now.getDate() + 14); //Adjust as needed

                if ( end < view.end) {
                    $(".fc-next-button").attr("disabled", true);
                    return false;
                }
                else {
                    $(".fc-next-button").attr("disabled", false);
                }

                if ( start < view.start) {
                    $(".fc-prev-button").attr("disabled", false);
                    return false;
                }
                else {
                    $(".fc-prev-button").attr("disabled", true);
                }
            },
            editable: false,
            handleWindowResize: true,
            weekends: true,
            allDayDefault : false,
            defaultView: 'basicWeek',
            firstDay: '1',
            columnFormat: 'ddd D/M',
            displayEventTime: true,
            timeFormat: 'h(:mm)a',
            timezone: 'local',
            height: 'auto',
            header: {
                left: 'prev',
                center: 'today',
                right: 'next'
            },
            eventRender: $scope.eventRender
        }
    };


    $scope.$on('loaded', function() {
        $timeout(function(){
            uiCalendarConfig.calendars["sonarr"].fullCalendar('today');
        });
    });
}