angular.module('routing', [
    'home.controller',
    'faq.controller',
    'contacts.controller',
    'profile.controller',
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
                templateUrl: 'js/faq/view/faq.html',
                controller: 'FaqCtrl'
            })
            .state('contacts', {
                url: '/contacts',
                templateUrl: 'js/contacts/view/contacts.html',
                controller: 'ContactsCtrl'
            })
            .state('profile', {
                url: '/profile',
                templateUrl: 'js/profile/view/profile.html',
                controller: 'ProfileCtrl'
            })
        ;
    });