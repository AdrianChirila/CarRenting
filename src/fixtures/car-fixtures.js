/**
 * Created by adrianIoan on 04.12.2015.
 */

'use strict';

var fixtures = require('node-mongoose-fixtures');

function carFixtures(callback) {
    fixtures.save('Car', {
        Car: [
            {
                _id: '41224d776a326fb40f000003',
                brand: 'bmw',
                series: 'x6',
                power: 250
            },
            {
                _id: '41224d776a326fb40f000013',
                brand: 'audi',
                series: 'a4',
                power: 350
            },

            {
                _id: '41224d776a326fb40f000023',
                brand: 'bmw',
                series: 'x5',
                power: 200
            }
        ]
    }, function(err) {
        if (err) {
            //logger.error('Problem with saving comment-fixtures : ', err);
            console.log('Problem with saving car-fixtures'.red, err)
        } else {
            fixtures('Car', function(err) {
                if (err) {
                    //logger.error('Cannot find comment-fixtures : ', err);
                    console.log('Cannot find car-fixtures:'.red, err);
                } else {
                    //logger.debug('Found comment-fixtures into db!');
                    console.log('Found car-fixtures into db!'.green);
                }

                return callback(err);
            });
        }
    });
}

module.exports = carFixtures;
