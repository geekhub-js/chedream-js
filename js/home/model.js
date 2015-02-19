angular.module('home.model', [])
    .factory('dreams', function () {
        var dreams = [
            {
                title: 'Реконструкція скверу за будівлею облдержадміністрації',
                avatar: 'images/author.png',
                author: 'Інна Кулік',
                picture: 'images/img.png',
                favorites_count: 51,
                rating: 4
            }
        ];

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


        return {
            getDreams: function () {
                return dreams;
            }
        };
});