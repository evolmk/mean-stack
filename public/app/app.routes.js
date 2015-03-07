// inject ngRoute for all our routing needs
angular.module('app.routes', ['ngRoute'])

// configure our routes
    .config(function($routeProvider, $locationProvider) {
        $routeProvider

            // route for /  (home)
            .when('/', {
                templateUrl: 'app/views/home.html',
                controller: 'templateController'
            })

            // route for /about
            .when('/players', {
                templateUrl: 'app/views/players.html',
                controller: 'playerController'
            })

            // route for /contact
            .when('/contact', {
                templateUrl: 'app/views/contact.html',
                controller: 'templateController'
            });

        $locationProvider.html5Mode(true);
    });