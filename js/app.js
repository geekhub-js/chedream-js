angular.module('Che-app', [
    'allDreams.routing',
    'contacts.routing',
    'creatingDream.routing',
    'dream.routing',
    'editingDream.routing',
    'error.routing',
    'faq.routing',
    'mainPage.routing',
    'oldBrowser.routing',
    'profile.routing',
    'search.routing',
    'ui.router'
])
    .config(function ($urlRouterProvider) {
        $urlRouterProvider.otherwise('/');
    });
