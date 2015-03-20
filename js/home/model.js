angular.module('home.model', [
    'cheDream.api'
])
    .factory('dreams', function (api) {
         var isMoreDreams = true;

         var dreams = [];
         api('/dreams.json?limit=8', 'dreams').then(function (data) {
            dreams = data.dreams;
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

        angular.element( window ).on('scroll', bindScroll);
        function bindScroll() {
            var newDreams = {};
            if ((window.innerHeight + window.scrollY) >= document.querySelector('.wrapper').offsetHeight - 100) {
                api('/dreams.json?limit=' + (dreams.length + 4), 'New Dreams').then(function (data) {
                    newDreams = data.dreams;//.splice(dreams.length, 4)

//                    console.log('test started');
//                    console.log(newDreams);
//                    console.log('test finished');

                });
                if (newDreams.length < 4) {
                    isMoreDreams = false;
                }
//                dreams.concat(newDreams);

            }
        }

        return {
            getDreams: function() {
                return dreams;
            },
            getMoreDreams: function() {
                return isMoreDreams;
            }
        };
});