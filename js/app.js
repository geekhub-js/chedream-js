var chedreamApp = angular.module('cheDream.app', [
    'routing',
    'ui.router',
    'ngAnimate',
    'darthwade.dwLoading'
])
    .config(function ($urlRouterProvider) {
        $urlRouterProvider.otherwise('/');
    })
    ;
