var meanApp = angular.module('meanApp', [
    'app.routes',
    'ui.bootstrap',
    'ui.bootstrap.showErrors',
    'templateService',
    'userService',
    'playerService',
    'templateController',
    'userController',
    'playerController'
]);


//SPECIAL CONFIG

// angular-bootstrap show-errors
meanApp.config(['showErrorsConfigProvider', function (showErrorsConfigProvider) {
    showErrorsConfigProvider.showSuccess(true);
}]);


//DIRECTIVES

// numbers only
meanApp.directive('filterNumberOnly', function () {
    return {
        require: '?ngModel',
        link: function (scope, element, attrs, ngModelCtrl) {
            if (!ngModelCtrl) {
                return;
            }

            ngModelCtrl.$parsers.push(function (val) {
                var clean = val.replace(/[^0-9]+/g, '');
                if (val !== clean) {
                    ngModelCtrl.$setViewValue(clean);
                    ngModelCtrl.$render();
                }
                return clean;
            });

            element.bind('keypress', function (event) {
                if (event.keyCode === 32) {
                    event.preventDefault();
                }
            });
        }
    };
});