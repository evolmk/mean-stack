var Player = require('../models/player');
var config = require('../../config');


module.exports = function (app, express) {

    var apiRouter = express.Router();


    // route: /api
    // Test api using [siteurl]/api
    // ----------------------------------------------------
    apiRouter.get('/', function (req, res) {
        res.json({message: 'this is the main api'});
    });


    // route: /users
    // Create player
    // Get all players
    // ----------------------------------------------------
    apiRouter.route('/players')

        // create
        .post(function (req, res) {

            //test - log request
            console.log(req.body.name);

            //set model
            var player = new Player();		// new instance of the model

            //set the model's data from Post request (req)
            player.name = req.body.name;
            player.jerseynumber = req.body.jerseynumber;
            player.attributes.hand = req.body.attributes.hand;

            //save model
            player.save(function (err) {
                if (err) {
                    // duplicate entry
                    if (err.code == 11000)
                        return res.json({success: false, message: 'Error - entry is a dupicate'});
                    else
                        return res.send(err);
                }

                // success - return result
                res.json({result: 'Player created successfully. (json)'});
            });

        })

        // get all
        .get(function (req, res) {
            Player.find(function (err, players) {
                if (err) res.send(err);

                // return the players
                res.json(players);
            });
        });


    return apiRouter;
};