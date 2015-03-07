var _this = angular.module('templateService', []);

//make sure to add 'templateService' to dependencies list inside app.js
//all factories below will be included


//bootsrap alert service
_this.factory('alertService', ['$rootScope', '$timeout', function ($rootScope, $timeout) {
    var alertService;

    $rootScope.alerts = [];
    return alertService = {
        add: function (type, msg, cssclass, timeoutms) {

            $rootScope.alerts.push({
                type: type,
                msg: msg,
                cssclass: (typeof cssclass === "undefined") ? "alert-md" : cssclass,
                timeoutms: (typeof timeoutms === "undefined") ? "" : timeoutms,
                close: function () {
                    return alertService.closeAlert(this);
                }
            });

//TODO - add timeout functionality
            //if (timeoutms) {
            //    $timeout(function () {
            //        console.log(this);
            //        console.log($rootScope.alerts.indexOf(this));
            //        alertService.closeAlert(this);
            //    }, timeoutms);
            //}
        },
        closeAlert: function (alert) {
            return this.closeAlertIdx($rootScope.alerts.indexOf(alert));
        },
        closeAlertIdx: function (index) {
            return $rootScope.alerts.splice(index, 1);
        },
        clearAlerts: function () {
            $rootScope.alerts = [];
        }

    };
}]);