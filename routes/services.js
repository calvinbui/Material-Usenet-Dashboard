module.exports = function(app, config) {
    var portscanner = require('portscanner');
    var async = require("async");

    app.get('/services', function (req, res) {
        var services = config.services;
        async.each(services,
            function (service, callback) { // for each element in array
                portscanner.checkPortStatus(service.port, service.ip, function (error, status) { //scan if the port is open on the ip address
                    service.status = status; //add new value with result
                    callback();
                });
            }, function allDone() {
                res.send(services); //display new array on browser, but is not updated
            }
        );
    });
};