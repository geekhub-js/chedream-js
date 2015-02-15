angular.module('faq.controller', [
    'faq.model'
])
    .controller('FaqCtrl', function($scope, faq) {
        $scope.questions = faq.getQuestions();
    });