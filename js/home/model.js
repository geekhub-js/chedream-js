angular.module('home.model', [
    'cheDream.api'
])
    .factory('dreams', function (api) {
         var dreams = [];
         api('/dreams.json?limit=8').then(function (data) {
            dreams = data.items;

             dreams[0].dream_equipment_resources = '8';
             dreams[0].dream_financial_contributions = '5';
         });

        dreams.forEach(function(el) {
            if (el.favorites_count > 1) {
                el.favorites_count_word = 'Підтримало';
            } else if (el.favorites_count == 1) {
                el.favorites_count_word = 'Підтримав';
            } else {
                el.favorites_count_word = '';
                el.favorites_count = '';
            }
        });

//        TODO test it
//        angular.element( window ).bind('scroll', bindScroll);
//        function bindScroll() {
//            if (window.innerHeight + document.body.scrollTop > document.body.offsetHeight - 120) {
//                var newDreams = {},
//                    apiString = '/dreams.json?limit=' + (dreams.length + 4);
//                api(apiString).then(function (data) {
//                    newDreams = data.items.splice(dreams.length, 4);
//                });
//                dreams.concat(newDreams);
//            }
//        }

        return {
            getDreams: function () {
                return dreams;
            }
        };
});