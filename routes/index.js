// the app.js references this file. this then references the routes.
module.exports = function (app, config) { // takes the express app and configuration file as parameters
    require('./weather')(app, config);
    require('./tv')(app, config);
    require('./services')(app, config);
    require('./storage')(app, config);
    require('./system')(app, config);
    require('./prtg')(app, config);
    require('./movies')(app, config);
};