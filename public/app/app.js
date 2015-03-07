var meanApp = angular.module('meanApp', [
    'app.routes',
    'ui.bootstrap',
    'ui.bootstrap.showErrors',
    'angularMoment',
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

meanApp.directive('showonhoverparent', function () {
    return {
        link: function (scope, element, attrs) {
            element.parent().bind('mouseenter', function () {
                element.show();
            });
            element.parent().bind('mouseleave', function () {
                element.hide();
            });
        }
    };
});


//FILTERS

//return html as trusted
meanApp.filter('asHtml', function ($sce) {
    return function (val) {
        return $sce.trustAsHtml(val);
    };
});

//return date using momentjs
meanApp.filter('fromNow', function () {
    return function (date) {
        return moment(date).fromNow();
    };
});