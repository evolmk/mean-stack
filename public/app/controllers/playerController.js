var _this = angular.module('playerController', ['playerService', 'templateService']);


//PLAYERS Controller
//===========================================
//in use: <<div ng-controller="playerController as players">
//loop data: <tr ng-repeat="player in players.playerlist">

_this.controller('playerController', function ($scope, alertService) {
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

        //CHECK FORM VALIDITY
        $scope.$broadcast('show-errors-check-validity'); //show fields with validation errors even if fields empty
        //return if form is invalid
        if ($scope.playerForm.$invalid) {
            return;
        }


        //SAVE FORM DATA to mongo

        // add a player to the playerslist
        vm.playerlist.push({
            name: vm.playerData.name,
            hand: vm.playerData.hand,
            jerseynumber: vm.playerData.jerseynumber
        });


        //CLEAR FORM
        vm.playerData = {};


        //SHOW RESULT MESSAGE
        alertService.add("success", "Record Added Successfully");


        //CLEAR VALIDATION
        vm.reset();

    }
    //-end save


    //reset validation & clear form
    vm.reset = function () {
        //console.log("form action:  reset");
        $scope.$broadcast('show-errors-reset');
        vm.playerData = {name: '', hand: '', jerseynumber: ''};
    }

});