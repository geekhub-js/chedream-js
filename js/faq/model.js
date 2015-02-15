angular.module('faq.model', [])
    .factory('faq', function ($http) {
        var questions = {};
        $http.get('http://api.chedream.org/faqs.json').success(function(data) {
            questions = data;
        });

        var faq = {
            getQuestions: function () {
                return questions;
            }
        };

        return faq;
    });