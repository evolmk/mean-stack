angular.module('app.routes', ['ngRoute'])

    .config(function($routeProvider, $locationProvider) {

        $routeProvider

            .when('/', {
                templateUrl : 'app/views/pages/home.html',
                controller  : 'mainController',
                controllerAs: 'main'
            })
            .when('public/subpage', {
                templateUrl : 'app/views/pages/subpage.html',
                controller  : 'mainController',
                controllerAs: 'main'
            })
            .when('anyname', {
                templateUrl : 'app/views/pages/anyname.html',
                controller  : 'mainController',
                controllerAs: 'main'
            });


        $locationProvider.html5Mode(true);
    });