module.exports = function(app, config) {
    var request = require("request");
    var process = require("process");
    var CouchPotatoAPI = require('couchpotato-api');

    var couchpotato = new CouchPotatoAPI({
        hostname: config.couchpotato.host,
        apiKey: config.couchpotato.api,
        port: config.couchpotato.port,
        urlBase: config.couchpotato.url_base,
        ssl: config.couchpotato.ssl,
        username: config.couchpotato.username,
        password: config.couchpotato.password
    });

    function cpApiCall(path, res) {
        couchpotato.get(path).then(function (result) {
            res.send(result)
        }).catch(function (err) {
            throw new Error("There was a error processing the request: " + err);
        });
    }

    app.get('/couchpotato_api_comingsoon', function (req, res) {
        cpApiCall("media.list?status=active", res);
    });

    app.get('/couchpotato_api_downloaded', function (req, res) {
        cpApiCall("/media.list?release_status=available", res);
    });


};