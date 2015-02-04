angular.module('mainPage.routing', [
    'mainPage.controller',
    'ui.router'
])
    .config(function ($stateProvider) {
        $stateProvider
            .state('mainPage', {
                url: '/mainPage',
                controller: 'MainPageController',
                views: {
                    carousel: {
                        templateUrl: 'templates/mainPage/carousel.html'
                    },
                    content: {
                        templateUrl: 'templates/mainPage/content.html'
                    }
                }
            });
    });