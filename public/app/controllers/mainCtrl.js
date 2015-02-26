var ctrl = angular.module('mainCtrl', ['appServices']);

//GLOBAL Main Controller (accessible on all partial views)
//===========================================
//in use: <body ng-app="meanApp" ng-controller="mainController as main">
//reference: {{ main.message }}

ctrl.controller('mainController', function ($scope, alertService) {
    // bind this to vm (view-model)
    var vm = this;


    // TEST AREA
    vm.message = "this message is from the mainController";


    // NAV - active menu
    vm.isActive = function (viewLocation) {
        return viewLocation === $location.path();
    };


    //Bootrap Alerts using 'alertService' in services/appServices.js
    //add alert
    vm.addAlert = function () {
        //type, msg, timeout
        alertService.add("success", "Default success message");
        alertService.add("info", "Default info message");
        alertService.add("warning", "Default warning message");
        alertService.add("danger", "Default danger message");
    };
});


//NAVIGATION Controller
//===========================================
//in use: <div id="navbar" class="collapse navbar-collapse navbar-right" ng-controller="navController as nav">
//reference: {{ nav.isActive('/contact') }}

ctrl.controller('navController', function ($location) {
    // bind this to vm (view-model)
    var vm = this;

    //get active page
    vm.isActive = function (viewLocation) {
        return viewLocation === $location.path();
    }

});


//PLAYERS Controller
//===========================================
//in use: <<div ng-controller="playersController as players">
//loop data: <tr ng-repeat="player in players.playerlist">

ctrl.controller('playersController', function ($scope, alertService) {
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

    // information that comes from our form
    vm.playerData = {};

    // add player to data function
    vm.addPlayer = function () {

        // add a player to the playerslist
        vm.playerlist.push({
            name: vm.playerData.name,
            hand: vm.playerData.hand,
            jerseynumber: vm.playerData.jerseynumber
        });

        // after our player has been added, clear the form
        vm.playerData = {};

        //show success message
        alertService.add("success", "Success - Player Added");
        alertService.add("info", "Info - No changes were made");
        alertService.add("warning", "Warning - Player Added but has warning");
        alertService.add("danger", "Error - Could not communicate with database");


    }

});