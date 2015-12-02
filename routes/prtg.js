// send the prtg url
module.exports = function(app, config) {
    app.get('/prtg_map', function (req, res) {
        res.send(config.prtg);
    });
};