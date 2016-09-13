module.exports = function(app, config) {
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
        	var formattedJSON = [];
        	for (var movie in result.movies) { //grab every item from the movie array from couchpotato results
        		var poster_url = result.movies[movie].info.images.poster[0] //set poster url
        		poster_url = poster_url.replace(/^http:\/\//i, 'https://'); //change http to https
        		formattedJSON.push({
        			poster: poster_url
        		});
        	}
            res.send(formattedJSON)
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