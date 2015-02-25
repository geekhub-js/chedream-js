angular.module('home.model', [
    'cheDream.api'
])
    .factory('dreams', function (api) {
         var dreams = [];
         api('/dreams.json?limit=8').then(function (data) {
            dreams = data.items;
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
        angular.element( window ).on('scroll', bindScroll);
        function bindScroll() {
            if ((window.innerHeight + window.scrollY) >= document.querySelector('.wrapper').offsetHeight - 100) {
                var newDreams = {},
                    apiString = '/dreams.json?limit=' + (dreams.length + 4);
                api(apiString).then(function (data) {
                    newDreams = data.items.splice(dreams.length, 4);
                });
                if (newDreams.length === dreams.length) {
                    angular.element( '.ico-spin5.animate-spin').hide();
                }
                dreams.concat(newDreams);
            }
        }

        return {
            getDreams: function () {
                return dreams;
            }
        };
});