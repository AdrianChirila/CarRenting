/**
 * Created by adrianIoan on 03.12.2015.
 */

var appRoot = require('app-root-path').path;
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
//var colors = require('colors');

var routes = require(appRoot + '/src/config/routes/index');
var users = require(appRoot + '/src/config/routes/users');

car = require(appRoot + '/src/models/car-model');

var configApp = function(app, express) {
    //console.log("Start config app ".red);
    // view engine setup
    app.set('views', path.join(appRoot + '/src/views'));
    app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
    app.use(logger('dev'));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(cookieParser());
    app.use(express.static(path.join(__dirname, 'public')));

    app.use('/', routes);
    app.use('/users', users);

    return app;
};

module.exports = configApp;