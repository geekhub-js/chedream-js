angular.module('dreamAction.controller', [
    'dreamAction.model'
])
    .controller('DreamActionCtrl', function($scope, dreamAction, $rootScope) {

        $scope.currentDreamAction = dreamAction.getDreamAction;
        $rootScope.title = dreamAction.slug;

    });