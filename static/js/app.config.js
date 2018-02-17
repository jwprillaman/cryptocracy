'use strict';

angular.module('cryptocracy').config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('!');
        $routeProvider.when('/register', {
            template: "<register></register>"
        })
            .otherwise('/register')
    }]);
