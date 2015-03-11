angular.module('dreamAction.model', [
    'cheDream.api'
])
    .factory('dreamAction', function (api, $stateParams) {

        var dreamAction = {};

        api('/dreams/' + $stateParams.slug + '.json', 'dreamAction').then(function (data) {
            dreamAction = data;
        });

        return {
            getDreamAction: function () {
                return dreamAction;
            }
        };

    });