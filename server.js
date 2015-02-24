// BASE SETUP
// ======================================

// BASE SETUP
// ======================================

// CALL THE PACKAGES --------------------
var express = require('express');  // call express
var app = express();  // define our app using express
var bodyParser = require('body-parser');  // get body-parser
var morgan = require('morgan');  // used to see requests
var mongoose = require('mongoose');  // provides model mapping to MongoDb
//var User = require('./app/models/user');  //we don't have user system yet
var config = require('./config');  //loads config.js
var path = require('path');  // contains several helper functions to help make path manipulation easier



// APP CONFIG ---------------------
// use body parser so we can grab information from POST requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// log all requests to the console
app.use(morgan('dev'));

// connect to database (mongoDb local)
mongoose.connect(config.database);  //get connectionstring from config.js

// set static files location
// used for requests that our frontend will make
app.use(express.static(__dirname + '/public'));


// ROUTES
// ======================================

//NOT USING API YET

// API ROUTES (app/routes/api.js) ------------------------
//var apiRoutes = require('./app/routes/api')(app, express);
//app.use('/api', apiRoutes);


// MAIN CATCHALL ROUTE ---------------
// has to be registered after API ROUTES
app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/app/views/index.html'));
});


// START THE SERVER
// ===============================

app.listen(config.port);  //get port from config.js
console.log('Site Running on port ' + config.port);