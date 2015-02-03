angular.module('mainPage.routing', [
    'mainPage.controller',
    'ui.router'
])
    .config(function ($stateProvider) {
        $stateProvider
            .state('main', {
                url: '/',
                controller: 'MainPageController',
                templateUrl: 'templates/mainPage/content.html'
            })
            .state('carousel', {
                url: '/',
                controller: 'MainPageController',
                templateUrl: 'templates/mainPage/carousel.html'
            });
    });