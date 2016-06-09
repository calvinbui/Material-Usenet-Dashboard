var express = require('express');
var app = express();
var compression = require('compression');


require('autostrip-json-comments'); // remove comments from JSON as they are not standard
var config = require('./config.json'); // get the json file

// set the view engine to Pug
app.set('view engine', 'pug');

// compress responses
app.use(compression());

// middleware
app.use('/angular', express.static(__dirname + '/node_modules/angular/'));
app.use('/angular-animate', express.static(__dirname + '/node_modules/angular-animate/'));
app.use('/angular-loading-bar', express.static(__dirname + '/node_modules/angular-loading-bar/build'));
app.use('/angular-slick', express.static(__dirname + '/node_modules/angular-slick-carousel/dist/'));
app.use('/animate/', express.static(__dirname + '/node_modules/animate.css/'));
app.use('/assets', express.static(__dirname + '/assets/'));
app.use('/materialize/', express.static(__dirname + '/assets/dist/materialize/'));
app.use('/css', express.static(__dirname + '/assets/dist/css/'));
app.use('/fullcalendar', express.static(__dirname + '/node_modules/fullcalendar/dist/'));
app.use('/img', express.static(__dirname + '/assets/dist/img/'));
app.use('/jquery', express.static(__dirname + '/node_modules/jquery/dist/'));
app.use('/js', express.static(__dirname + '/assets/dist/js/'));
app.use('/lightslider', express.static(__dirname + '/node_modules/lightslider/dist/'));
app.use('/material-design-lite/', express.static(__dirname + '/node_modules/material-design-lite/'));
app.use('/moment', express.static(__dirname + '/node_modules/moment/'));
app.use('/normalize/', express.static(__dirname + '/node_modules/normalize.css/'));
app.use('/qtip2/', express.static(__dirname + '/assets/dist/qtip2/'));
app.use('/slick', express.static(__dirname + '/node_modules/slick-carousel/slick'));
app.use('/ui-calendar', express.static(__dirname + '/node_modules/angular-ui-calendar/src'));

// render the index.jade page
app.get('/', function (req, res) {
    res.render('index');
});

app.get('/homepage', function (req, res) {
    res.render('homepage/homepage');
});

// routes
require('./routes')(app, config);

// the port it will start on
app.listen(3000);