angular.module('faq.model', [
    'cheDream.api'
])
    .factory('faq', function (api) {
        var questions = {};
        api('/faqs.json').then(function (data) {
            questions = data.items;//or just =data
        });

        return {
            getQuestions: function () {
                return questions;
            }
        };
    });