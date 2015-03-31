angular.module('editDream.model', [
    'cheDream.api'
])
    .factory('editDream', function (api, $stateParams) {

        var dream = {};

        api('get', '/dreams/' + $stateParams.slug + '.json', 'editDream').then(function (data) {
            dream = data;
        });

        return {
            getDream: function () {
                return dream;
            }
        };

    });