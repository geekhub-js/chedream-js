angular.module('dream.model', [
    'cheDream.api'
])
    .factory('dream', function (api, $stateParams) {

        var dream = {};

        api('/dreams/' + $stateParams.slug + '.json', 'dream').then(function (data) {
            dream = data;

            var needWords = [
                    'dream_financial_resources',
                    'dream_equipment_resources',
                    'dream_work_resources'
                ],
                haveWords = [
                    'dream_financial_contributions',
                    'dream_equipment_contributions',
                    'dream_work_contributions'
                ],
                putWords = [
                    'financialPercent',
                    'equipmentPercent',
                    'workPercent'
                ],
                need,
                have,
                i;
            for (i = 0; i < putWords.length; i++) {
                need = 0;
                have = 0;
                dream[needWords[i]].forEach(function (el) {
                    need += el.quantity;
                });
                dream[haveWords[i]].forEach(function (el) {
                    have += el.quantity;
                });
                dream[putWords[i]] = Math.round( have / need * 100 );
                if (isNaN(dream[putWords[i]])) {
                    dream[putWords[i]] = 0;
                }
            }

        });

        return {
            getDream: function () {
                return dream;
            }
        };

    });