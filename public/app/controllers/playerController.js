var _this = angular.module('playerController', ['playerService', 'templateService']);


//PLAYERS Controller
//===========================================
//in use: <<div ng-controller="playerController as players">
//loop data: <tr ng-repeat="player in players.playerlist">

_this.controller('playerController', function (Player, $scope, $timeout, alertService) {

    // bind this to vm (view-model)
    var vm = this;


    //controller vars
    vm.getprocessing = true;  //show loading by default
    vm.formprocessing = false;
    vm.formtype = 'create';


    //=============================================================
    //DATA ACTIONS
    //=============================================================

    vm.getAll = function () {

        // grab all from playerFactory
        Player.all()
            .success(function (data) {

                //bind the mongo data to vm
                vm.playerlist = data;

                // hide processing
                vm.getprocessing = false;
            });

        vm.formprocessing = false;

    }; //end getall


    //=============================================================
    //INITIAL PAGE LOAD
    //=============================================================

    // set initial form data
    vm.playerData = {};

    //define options for form
    vm.handoptions = [
        {name: 'Left', value: 'Left'},
        {name: 'Right', value: 'Right'}
    ];

    //get all players on load
    vm.getAll();


    //=============================================================
    //FORM ACTIONS
    //=============================================================

    // save player form (create or update if exists)
    vm.savePlayer = function () {

        //CHECK FORM VALIDITY
        $scope.$broadcast('show-errors-check-validity'); //show fields with validation errors even if fields empty
        //return if form is invalid
        if ($scope.playerForm.$invalid) {
            return;
        }

        //SAVE FORM DATA to mongo
        vm.formprocessing = true;

        $timeout(function () {

            // use the create function in the playerService
            Player.create(vm.playerData)
                .success(function (data) {
                    //show success message
                    alertService.clearAlerts(); //clear first
                    alertService.add("success", vm.playerData.name + " Added Successfully");
                    //clear validation & form
                    vm.reset();
                    vm.formprocessing = false;
                    vm.playerData = {};
                });

            //after action - update data grid
            vm.getAll();

        }, 500);

    };
    //end save


    //reset validation & clear form
    vm.reset = function () {
        //console.log("form action:  reset");
        $scope.$broadcast('show-errors-reset');
        vm.playerData = {name: '', hand: '', jerseynumber: ''};
    };

});