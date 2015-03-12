angular.module('addDream.model', [
    'cheDream.api'
])
    .factory('addDream', function () {

        var dream = {};

        return {
            getDream: function () {
                return dream;
            }
        };

    });