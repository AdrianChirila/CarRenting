/**
 * Created by adrianIoan on 04.12.2015.
 */
var appRoot = require('app-root-path').path;
var mongoose = require('mongoose');

var params = require(appRoot + '/src/config/parameters');

var connectToDataBase = function() {
    var url = null;

    if (process.env.ENV === 'test') {
        url = params.databaseUrlTest;
    } else {
        url = params.databaseUrl;
    }

    return url;
};

module.exports = connectToDataBase;