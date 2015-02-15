angular.module('faq.model', [
    'cheDream.api'
])
    .factory('faq', function (api) {
        var questions = {};
        api('/faqs.json').then(function (data) {
            questions = data;
        });

        var faq = {
            getQuestions: function () {
                return questions;
            }
        };

        return faq;
    });