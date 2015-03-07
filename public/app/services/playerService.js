angular.module('playerService', [])

    .factory('Player', function ($http) {

        // create a new object
        var playerFactory = {};

        // get a single player
        playerFactory.get = function (id) {
            return $http.get('/api/players/' + id);
        };

        // get all players
        playerFactory.all = function () {
            return $http.get('/api/players/');
        };

        // create a player
        playerFactory.create = function (playerData) {
            return $http.post('/api/players/', playerData);
        };

        // update a player
        playerFactory.update = function (id, playerData) {
            return $http.put('/api/players/' + id, playerData);
        };

        // delete a player
        playerFactory.delete = function (id) {
            return $http.delete('/api/players/' + id);
        };

        // return our entire playerFactory object
        return playerFactory;

    });