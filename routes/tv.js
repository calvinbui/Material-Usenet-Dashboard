module.exports = function(app, config) {
    var SonarrAPI = require('sonarr-api');
    var moment = require('moment');
    var sonarr = new SonarrAPI({
        hostname: config.sonarr.host,
        apiKey: config.sonarr.api,
        port: config.sonarr.port,
        urlBase: config.sonarr.url_base,
        ssl: config.sonarr.ssl,
        username: config.sonarr.username,
        password: config.sonarr.password
    });

    app.get('/sonarr_api', function(req, res) {
        sonarr.get("calendar", {
            "start": moment().day(-21).format('YYYY-MM-DD'), // two weeks ago starting Monday.
            "end": moment().day(21).format('YYYY-MM-DD') }) // two sundays in the future 7 = this sunday so 21 = 3 sundays
            .then(function (result) {
                var formattedJSON = []; // initialise
                for (var show in result) { //add the colour to the tv show. not the best way to do this but works i guess
                    // chuck it all in the array
                    formattedJSON.push({
                        title       : result[show].series.title,
                        allDay      : false,
                        season      : result[show].seasonNumber,
                        episode     : result[show].episodeNumber,
                        start       : result[show].airDateUtc,
                        className   : [returnShowStatus(result[show]), 'mdl-shadow--2dp'], // add the mdl shadow on along with the status of the episode
                        overview    : result[show].overview,
                        poster      : result[show].series.images[2].url // 2 because 0 is the first
                    });
                }
                res.send(formattedJSON);
        }, function (err) {
            throw new Error("There was a error processing the request: " + err);
        });
    });

    function returnShowStatus(show) {
        if (show.hasFile) {
            return 'mdl-color--green'; //downloaded
        } else if (!show.hasFile && moment().isAfter(show.airDateUtc)) {
            return 'mdl-color--red'; //missing
        } else if (moment().isAfter(moment(show.airDateUtc)) && moment().isBefore(moment(show.airDateUtc).add('minutes', show.runtime))) {
            return 'mdl-color--orange-600'; //on air
            //during the airdate and before the finish time. add the runtime to the start time to get the end time
        } else {
            return 'mdl-color--indigo-400' //default unaired
        }
    }
};
