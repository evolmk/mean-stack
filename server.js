// BASE SETUP
// ======================================

// CALL THE PACKAGES --------------------

var express    = require('express');		// call express
var app        = express(); 				// define our app using express
var bodyParser = require('body-parser'); 	// get body-parser
var morgan     = require('morgan'); 		// used to see requests
var mongoose   = require('mongoose');
//var User       = require('./app/models/user');
var port       = process.env.PORT || 8080; // set the port for our app


// APP CONFIGURATION ---------------------

// use body parser so we can grab information from POST requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// log all requests to the console
app.use(morgan('dev'));

// connect to our database (mongoDb local)
mongoose.connect('mongodb://node:noder@novus.modulusmongo.net:27017/Iganiq8o');


// ROUTES FOR OUR API (url=/api)
// =============================

// basic route for the home page
app.get('/', function(req, res) {
    res.send('Welcome to the home page!');
});

// get an instance of the express router
var apiRouter = express.Router();

// test route to make sure everything is working
// accessed at GET http://localhost:8080/api
apiRouter.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });
});

// more routes for our API will happen here

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', apiRouter);


// START THE SERVER
// ===============================

app.listen(port);
console.log('Site Running on port ' + port);