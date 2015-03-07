var _this = angular.module('templateController', ['templateService']);

//TEMPLATE Controller (accessible on all partial views)
//===========================================
//in use: <body ng-app="meanApp" ng-controller="templateController as template">
//reference: {{ template.message }}

_this.controller('templateController', function ($scope, alertService) {
    // bind this to vm (view-model)
    var vm = this;


    // TESTS HERE ONLY
    vm.message = "this message is from the mainController";

    //Bootrap Alerts using 'alertService' in services/appService.js
    //test alert service
    vm.TestAddAlerts = function () {
        //params: type (sucess|info|warning|danger), msg (string), cssclass (default=alert-md), timeoutms (time in ms, default="")
        alertService.add("success", "Success Message: .alert-lg", "alert-lg");
        alertService.add("info", "Info Message: .alert-md", "alert-md");
        alertService.add("warning", "Warning Message: .alert-sm", "alert-sm");
        alertService.add("danger", "Danger Message: <i>none, default is alert-md size</i>, ");
    };
    vm.TestClearAlerts = function () {
        alertService.clearAlerts();
    };


});


//NAVIGATION Controller
//===========================================
//in use: <div id="navbar" class="collapse navbar-collapse navbar-right" ng-controller="navController as nav">
//reference: {{ nav.isActive('/contact') }}

_this.controller('navController', function ($location) {
    // bind this to vm (view-model)
    var vm = this;

    // NAV - active menu
    vm.isActive = function (viewLocation) {
        return viewLocation === $location.path();
    }

});