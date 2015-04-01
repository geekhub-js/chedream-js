angular.module('faq.controller', [
    'faq.model',
    'ngSanitize'
])
    .controller('FaqCtrl', function($scope, faq, $sce, $rootScope) {

        $rootScope.title = 'FAQ';
        $scope.questions = faq.getQuestions;
        $scope.question = faq.getQuestion;
        $scope.position = faq.position;
        $scope.current = faq.position();
        $scope.changeChosenNumber = function(el) {
            $scope.current = faq.position(el);
        };
        $scope.deliberatelyTrustDangerousSnippet = function() {
            return $sce.trustAsHtml($scope.questions()[$scope.current].answer);
        };

    });