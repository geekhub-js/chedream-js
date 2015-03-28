angular.module('dream.controller', [
    'dream.model',
    'ngSanitize'
])
    .controller('DreamCtrl', function($scope, dream, $sce, $rootScope) {

        $rootScope.title = dream.slug;
        $scope.currentDream = dream.getDream;
        $scope.deliberatelyTrustDangerousSnippet = function() {
            return $sce.trustAsHtml($scope.dream.description);
        };

    });