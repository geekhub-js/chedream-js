angular.module('home.controller', [
    'home.model'
])
    .controller('HomeCtrl', function($scope, dreams, $rootScope) {
        $rootScope.title = 'Черкаська мрія - Головна';
        $scope.dreams = dreams.getDreams();
    });