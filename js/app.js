var chedreamApp = angular.module('cheDream.app', [
    'routing',
    'ui.router',
    'ngAnimate'
])
    .config(function ($urlRouterProvider) {
        $urlRouterProvider.otherwise('/');
    });
