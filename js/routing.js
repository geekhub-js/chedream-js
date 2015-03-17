angular.module('routing', [
    'home.controller',
    'faq.controller',
    'contacts.controller',
    'dream.controller',
    'editDream.controller',
    'addDream.controller',
    'ui.router'
])
    .config(function ($stateProvider) {
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'templates/home.html',
                controller: 'HomeCtrl'
            })
            .state('faq', {
                url: '/faq',
                templateUrl: 'templates/faq.html',
                controller: 'FaqCtrl'
            })
            .state('contacts', {
                url: '/contacts',
                templateUrl: 'templates/contacts.html',
                controller: 'ContactsCtrl'
            })
            .state('dream', {
                url: '/dream/{slug}',
                templateUrl: 'js/dream/view/dream.html',
                controller: 'DreamCtrl'
            })
            .state('editDream', {
                url: '/editDream/{slug}',
                templateUrl: 'templates/dreamAction.html',
                controller: 'EditDreamCtrl'
            })
            .state('addDream', {
                url: '/addDream',
                templateUrl: 'templates/dreamAction.html',
                controller: 'AddDreamCtrl'
            })
        ;
    });