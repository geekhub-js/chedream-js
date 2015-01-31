angular.module('mainPage.routing', [
    'mainPage.controller',
    'ui.router'
])
    .config(function ($stateProvider) {
        $stateProvider
            .state('content', {
                url: '/',
                templateUrl: 'templates/mainPage/content.html',
                controller: 'MainPageController'
            })/*
            .state('carousel', {
                url: '/',
                templateUrl: 'templates/mainPage/carousel.html',
                controller: 'MainPageController'
            })*/;
    });