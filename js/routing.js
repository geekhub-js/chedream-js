angular.module('routing', [
    'addDream.controller',
    'contacts.controller',
    'editDream.controller',
    'editProfile.controller',
    'faq.controller',
    'home.controller',
    'userProfile.controller',
    'ui.router'
])
    .config(function ($stateProvider) {
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'templates/home.html',
                controller: 'home.controller'
            })
            .state('faq', {
                url: '/faq',
                templateUrl: 'templates/faq.html',
                controller: 'faq.controller'
            })
            .state('contacts', {
                url: '/contacts',
                templateUrl: 'templates/contacts.html',
                controller: 'contacts.controller'
            });
    });