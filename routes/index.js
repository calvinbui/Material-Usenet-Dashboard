// the app.js references this file. this then references the routes.
module.exports = function (app, config) { // takes the express app and configuration file as parameters
    require('./tv')(app, config);
    require('./services')(app, config);
    require('./storage')(app, config);
    require('./movies')(app, config);
};