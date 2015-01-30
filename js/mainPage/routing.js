angular.module('mainPage.routing', [
    'mainPage.controller',
    'ui.router'
])

    .config(function ($stateProvider) {
        $stateProvider
            .state('td', {
                url: '/',
                templateUrl: 'templates/mainPage/header.html',
                controller: 'MainPageController'
            });
    });