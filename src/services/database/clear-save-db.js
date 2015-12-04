/**
 * Created by adrianIoan on 04.12.2015.
 */

'use strict';

/**
 * Created by Adrian on 12/10/15.
 */

'use strict';

var mongoose = require('mongoose');
var async = require('async');
var fixtures = require('node-mongoose-fixtures');
var appRoot = require('app-root-path').path;
var colors  = require('colors');

var saveFixtures = require(appRoot + '/src/fixtures/fixture');
var url = require(appRoot + '/src/config/database')();

// I just want to execute code from these three files
// Don't want to create a variable because the linter will
// mark it as unused

require(appRoot + '/src/models/car-model');

function clearAndSave(done) {
    async.waterfall([
        function(callback) {
            mongoose.connect(url, function(err) {
                return callback(err);
            });
        },
        function(callback) {
            fixtures.reset(mongoose, function(err) {
                return callback(err);
            });
        },

        function(callback) {
            saveFixtures(function(err) {
                return callback(err);
            });
        }

    ], function(err) {
        if (err) {
            //logger.error('Problem with saving fixtures : ', err);
            console.log('Problem with saving fixtures'.red, err);
        } else {
            //logger.debug('Everything works fine with initializing fixtures into db!');
            console.log('Everything works fine with initializing fixtures into db!'.green);
        }

        return done(err);
    });
}

module.exports = clearAndSave;
