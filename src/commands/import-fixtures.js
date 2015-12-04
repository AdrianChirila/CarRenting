/**
 * Created by adrianIoan on 04.12.2015.
 */

'use strict';

var appRoot = require('app-root-path').path;

require(appRoot + '/src/services/database/clear-save-db')(function(err) {
    if (err) {
        //logger.err(err);
        console.log('Could not import into db'.red, err);
        return process.exit(1);
    }
    //logger.debug('Done, no errors!');
    console.log('Done, no errors!'.green);

    return process.exit(0);
});