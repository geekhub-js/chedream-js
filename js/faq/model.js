angular.module('faq.model', [
    'cheDream.api'
])
    .factory('faq', function (api) {
        var questions = [];

        api('/faqs.json', 'faqs').then(function (data) {
            questions = data.faqs;
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