angular.module('faq.model', [
    'cheDream.api'
])
    .factory('faq', function (api) {
        var questions = [];

        api('get', '/faqs.json', 'faqs').then(function (data) {
            questions = data;
        });

        return {
            getQuestions: function () {
                return questions;
            },
            getQuestion: function (id) {
                console.info(questions[id].id);
                return questions[id].id;
            },
            position: function (el) {
                return el ? questions.indexOf(el) : 0;
            }
        };
    });