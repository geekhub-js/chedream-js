angular.module('Che-app', [
    'allDreams.routing',
    'contacts.routing',
    'dream.routing',
    'error.routing',
    'faq.routing',
    'mainPage.routing',
    'oldBrowser.routing',
    'popUps.routing',
    'profile.routing',
    'search.routing',
    'ui.router'
])
    .config(function ($urlRouterProvider) {
        $urlRouterProvider.otherwise('/');
    });
