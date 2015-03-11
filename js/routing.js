angular.module('routing', [
    'home.controller',
    'faq.controller',
    'contacts.controller',
    'dream.controller',
    'dreamAction.controller',
    //'editProfile.controller',
    //'userProfile.controller',
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
                templateUrl: 'templates/dream.html',
                controller: 'DreamCtrl'
            })
            .state('dreamAction', {
                url: '/dreamAction/{slug}',
                templateUrl: 'templates/dreamAction.html',
                controller: 'DreamActionCtrl'
            })
        ;
    });