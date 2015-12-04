/**
 * Created by adrianIoan on 04.12.2015.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var validator = require('mongoose-validators');

var carSchema = new Schema({
    brand :{
        type:String,
        required:true,
        validate: [validator.isLength({
            message: 'Brand must be a string between 3 and 10 chars!'
        }, 3, 10)]
    },

    series :{
        type:String,
        required: true,
        validate: [validator.isLength({
            message: 'Series must be a string between 2 and 10 chars!'
        }, 2, 10)]
    },

    power:{
        type:Number,
        required: true
    }
});

module.exports = mongoose.model('Car', carSchema);