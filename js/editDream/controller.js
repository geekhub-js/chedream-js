angular.module('editDream.controller', [
    'editDream.model'
])
    .controller('EditDreamCtrl', function($scope, editDream, $rootScope) {

        $scope.currentDream = editDream.getDream;
        $rootScope.title = editDream.slug;

    });