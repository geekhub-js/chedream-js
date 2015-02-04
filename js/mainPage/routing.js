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
                        url: '/carousel',
                        templateUrl: 'templates/mainPage/carousel.html'
                    },
                    content: {
                        url: '/content',
                        templateUrl: 'templates/mainPage/content.html'
                    }
                }
            });
    });