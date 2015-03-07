var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt-nodejs');

// model schema
var playerSchema = new Schema({
    created: {type: Date, default: Date.now},
    updated: {type: Date, default: Date.now},
    name: {type: String, required: true, trim: true},
    jerseynumber: {type: Number, required: true, trim: true},
    attributes: {
        hand: {type: String},
        height: {type: String}
    }
});

// pre-actions
//schema.pre('save', function(next) {
//    var player = this;
//    next();
//});

// methods


module.exports = mongoose.model('Player', playerSchema);  //expose model