var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt-nodejs');

// model schema
var estimateSchema = new Schema({
    created: {type: Date, default: Date.now},
    name: {type: String},
    email: {type: String},
    phone: {type: String},
    projects: [
        {
            imageurl: String,
            materialsize: Number,
            anythingyouwant: String
        }
    ],
    price: {type: Number}
});

// pre-actions here
//schema.pre('save', function(next) {
//    var estimate = this;
//    next();
//});

// methods here


module.exports = mongoose.model('Estimate', estimateSchema);  //expose model