/**
 * Created by adrianIoan on 04.12.2015.
 */

'use strict';

var async = require('async');
var appRoot = require('app-root-path').path;

var carFixtures = require(appRoot + '/src/fixtures/car-fixtures');

var saveFixtures = function(callback) {
  async.waterfall([
      carFixtures
  ], callback)
};

module.exports = saveFixtures;

