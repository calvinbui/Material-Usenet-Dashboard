module.exports = function(app, config) {
    var request = require("request");
    var process = require("process");

    app.get('/couchpotato_api_comingsoon', function (req, res) {
        process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0"; // ignore ssl errors
        function callback(error, response, body) {
            res.send(JSON.parse(body));
        }
        request(config.couchpotato.api_url + config.couchpotato.api + '/media.list?status=active', callback);
    });

    app.get('/couchpotato_api_downloaded', function (req, res) {
        process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0"; // ignore ssl errors
        function callback(error, response, body) {
            res.send(JSON.parse(body));
        }
        request(config.couchpotato.api_url + config.couchpotato.api + '/media.list?release_status=available', callback);
    });
};