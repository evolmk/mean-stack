// inject uiRouter for all our routing needs
angular.module('app.routes', ['ui.router'])

    .config(function($stateProvider, $urlRouterProvider, $locationProvider) {
        //$urlRouterProvider
        //    .when("/players", "/players")
        //    .when("/home",   "/home")
        //    .when("/login",  "/login")
        //    .otherwise("/")
        //;

        $locationProvider.html5Mode(true);

        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: '/app/views/index.html'
            })
            .state('players', {
                url: '/players',
                templateUrl: '/app/views/players.html'
            })
            .state("players.detail", {
                url: ':id',
                templateUrl: '/app/views/players-detail.html'

            });

        // catch all route
        // send users to the form page
        $urlRouterProvider.otherwise('home');

    });