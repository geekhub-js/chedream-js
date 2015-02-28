angular.module('dream.controller', [
    'dream.model'
])
    .controller('DreamCtrl', function($scope, dream, $rootScope) {

        $scope.dream = dream.getDream();
        $rootScope.title = dream.slug;

    });