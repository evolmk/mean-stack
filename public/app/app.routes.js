// inject ngRoute for all our routing needs
angular.module('app.routes', ['ngRoute'])

// configure our routes
    .config(function($routeProvider, $locationProvider) {
        $routeProvider

            // route for /  (home)
            .when('/', {
                templateUrl : 'app/views/pages/home.html',
                controller  : 'mainController',
                controllerAs: 'main'
            })

            // route for /about
            .when('/about', {
                templateUrl : 'app/views/pages/about.html',
                controller  : 'mainController',
                controllerAs: 'main'
            })

            // route for /contact
            .when('/contact', {
                templateUrl : 'app/views/pages/contact.html',
                controller  : 'mainController',
                controllerAs: 'main'
            });

        $locationProvider.html5Mode(true);
    });