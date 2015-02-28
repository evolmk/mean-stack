var module = angular.module('mainCtrl', ['appServices']);

//GLOBAL Main Controller (accessible on all partial views)
//===========================================
//in use: <body ng-app="meanApp" ng-controller="mainController as main">
//reference: {{ main.message }}

module.controller('mainController', function ($scope, alertService) {
    // bind this to vm (view-model)
    var vm = this;


    // TESTS HERE ONLY
    vm.message = "this message is from the mainController";

    //Bootrap Alerts using 'alertService' in services/appServices.js
    //test alert service
    vm.TestAddAlerts = function () {
        //type, msg, timeout
        alertService.add("success", "Default success message");
        alertService.add("info", "Default info message");
        alertService.add("warning", "Default warning message");
        alertService.add("danger", "Default danger message");
    };
    vm.TestClearAlerts = function () {
        alertService.clearAlerts();
    };



});


//NAVIGATION Controller
//===========================================
//in use: <div id="navbar" class="collapse navbar-collapse navbar-right" ng-controller="navController as nav">
//reference: {{ nav.isActive('/contact') }}

module.controller('navController', function ($location) {
    // bind this to vm (view-model)
    var vm = this;

    // NAV - active menu
    vm.isActive = function (viewLocation) {
        return viewLocation === $location.path();
    }

});


//PLAYERS Controller
//===========================================
//in use: <<div ng-controller="playersController as players">
//loop data: <tr ng-repeat="player in players.playerlist">

module.controller('playersController', function ($scope, alertService) {
    // bind this to vm (view-model)
    var vm = this;


    // DEFINE VARIABLES & OBJECTS - lets them be available to our views

    // basic message
    vm.message = 'player list from [mainCtrl] playersController';


    //define options for form
    vm.handoptions = [
        {name: 'Left', value: 'Left'},
        {name: 'Right', value: 'Right'}
    ];

    // define a list of items
    vm.playerlist = [
        {name: 'Wayne Gretzky', hand: 'Left', jerseynumber: 99},
        {name: 'Derek Stepan', hand: 'Right', jerseynumber: 21},
        {name: 'Brian Leetch', hand: 'Left', jerseynumber: 2},
        {name: 'Mark Messier', hand: 'Left', jerseynumber: 11}
    ];

    // set initial form data
    vm.playerData = {};


    //FORM ACTIONS

    // save player form
    vm.save = function () {

        console.log("form valid: " + $scope.playerForm.$valid);

        //console.log("form action: save");

        // check to make sure the form is completely valid

        //if form is not valid then return out of save function
        if (!$scope.playerForm.$valid) {
            return;
        }

        // add a player to the playerslist
        vm.playerlist.push({
            name: vm.playerData.name,
            hand: vm.playerData.hand,
            jerseynumber: vm.playerData.jerseynumber
        });

        // after our player has been added, clear the form
        vm.playerData = {};

        //show success message
        alertService.add("success", "Record Added Successfully");

        vm.reset();
    }


    // reset player form
    vm.reset = function () {
        //console.log("form action:  reset");
        $scope.$broadcast('show-errors-reset');
        vm.playerData = {name: '', hand: '', jerseynumber: ''};
    }

});