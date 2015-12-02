module.exports = function(app, config) {
    var ForecastIo = require('forecastio');
    var moment = require('moment');

    app.get('/weather', function(req, res) {
        new ForecastIo(config.weather.forecast_api).forecast(config.weather.latitude, config.weather.longitude, { units: config.weather.units }, function(err, data) {
            //for meteocons
            //var weatherIcons = {'clear-day':'B','clear-night':'C','rain':'R','snow':'W','sleet':'X','wind':'F','fog':'L','cloudy':'N','partly-cloudy-day':'H','partly-cloudy-night':'I',}
            res.send({
                currentTemp    : Math.round(data.currently.temperature),
                currentSummary : data.currently.summary,
                location       : config.weather.location,
                icon           : data.currently.icon, // based on the above
                sunrise        : moment.unix(data.daily.data['0'].sunriseTime).format("h:mm a"),
                sunset         : moment.unix(data.daily.data['0'].sunsetTime).format("h:mm a"),
                //hourlySummary  : data.minutely.summary, //doesnt exist in all locations
                dailySummary   : data.hourly.summary, //named hourly for some reason for the next 24 hour info
                weeklySummary  : data.daily.summary // summary of the week ahead
            });
        });
    });
};