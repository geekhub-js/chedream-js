angular.module('faq.controller', [
    'faq.model'
])
    .controller('FaqCtrl', function($scope, faq) {
        $scope.questions = faq.getQuestions();
        console.log($scope.questions);//TODO delete this line
    });