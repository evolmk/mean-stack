// inject ngRoute for all our routing needs
angular.module('app.routes', ['ngRoute'])

// configure our routes
    .config(function($routeProvider, $locationProvider) {
        $routeProvider

            // route for /  (home)
            .when('/', {
                templateUrl: 'app/views/home.html',
                controller: 'templateController',
                controllerAs: 'home'
            })

            // route for /about
            .when('/about', {
                templateUrl: 'app/views/about.html',
                controller: 'templateController',
                controllerAs: 'about'
            })

            // route for /contact
            .when('/contact', {
                templateUrl: 'app/views/contact.html',
                controller: 'templateController',
                controllerAs: 'contact'
            });

        $locationProvider.html5Mode(true);
    });