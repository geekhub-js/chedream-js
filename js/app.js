var chedreamApp = angular.module('cheDream.app', [
    'routing',
    'angular-carousel',
    'ui.router',
    'ngAnimate',
    'darthwade.dwLoading'
])
    .config(function ($urlRouterProvider) {
        $urlRouterProvider.otherwise('/');
    });
