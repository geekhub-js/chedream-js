angular.module('faq.controller', [
    'faq.model'
])
    .controller('FaqCtrl', function($scope, faq) {
        $scope.questions = faq.getQuestions;
        $scope.question = faq.getQuestion;
        $scope.position = faq.position;
        $scope.current = faq.position();
        $scope.changeChosenNumber = function(el) {
            $scope.current = faq.position(el);
        };
    });