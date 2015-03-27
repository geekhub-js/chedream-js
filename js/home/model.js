angular.module('home.model', [
    'cheDream.api'
])
    .factory('dreams', function (api) {
         var isMoreDreams = true;

         var dreams = [];
         api('/dreams.json?count=8', 'dreams').then(function (data) {
            dreams = data.dreams;
         });

//        angular.element( window ).on('scroll', bindScroll);
//        function bindScroll() {
//            var newDreams = {};
//            if ((window.innerHeight + window.scrollY) >= document.querySelector('.wrapper').offsetHeight - 100) {
//                api('/dreams.json?count=' + (dreams.length + 4), 'New Dreams').then(function (data) {
//                    newDreams = data.dreams;//.splice(dreams.length, 4)
//
////                    console.log('test started');
////                    console.log(newDreams);
////                    console.log('test finished');
//
//                });
//                if (newDreams.length < 4) {
//                    isMoreDreams = false;
//                }
////                dreams.concat(newDreams);
//
//            }
//        }

        return {
            getDreams: function() {
                return dreams;
            },
            getMoreDreams: function() {
                return isMoreDreams;
            }
        };
});