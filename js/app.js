angular.module('Che-app', [
    'mainPage.routing',
    'ui.router'
])
    .config(function ($urlRouterProvider) {
        $urlRouterProvider.otherwise('/');
    });
