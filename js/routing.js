angular.module('routing', [
    'home.controller',
    'faq.controller',
    'contacts.controller',
    'profile.controller',
    'ui.router'
])
    .config(['$stateProvider', '$locationProvider', function ($stateProvider, $locationProvider) {
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
        $locationProvider.html5Mode({enabled: true, requireBase: false});
    }]);