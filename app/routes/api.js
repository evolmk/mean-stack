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


    //=====================================================
    //PLAYERS
    //=====================================================


    // route: /users
    // Create player
    // Get all players
    // ----------------------------------------------------
    apiRouter.route('/players')

        // create
        .post(function (req, res) {
            //new instance of the model
            var player = new Player();

            //set the model data from Post request (req)
            player.name = req.body.name;
            player.jerseynumber = req.body.jerseynumber;
            player.attributes.hand = req.body.attributes.hand;

            //save model
            player.save(function (err) {
                if (err) {
                    // duplicate entry
                    if (err.code == 11000)
                        return res.json({success: false, message: 'Error - entry is a duplicate'});
                    else
                        return res.send(err);
                }

                // success - return result
                res.json({result: req.body.name + ' created successfully.'});
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
    //end players api


    //=====================================================
    //API NAME
    //=====================================================




    return apiRouter;
};