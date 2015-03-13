chedreamApp.directive('uiCarousel', function() {
    return {
        restrict: 'E',
        scope: {},
        controller: function($scope, api, $interval) {
            api('/dreams?limit=4&status=compleated&sort_by=status_update&sort_order=DESC', 'carousel').then(function (data) {
                $scope.doneDreams = data.items;
            });

            $scope.doneDreams = [//fake
                {
                    slug: 'number1',
                    title: 'first',
                    url: 'images/carosel-item2.jpg',
                    completed_description: 'qwe qwe qwe qwe qwe qwe qwe qwe qwe qwe qwe qwe qwe qwe qwe qwe qwe qwe qwe qwe qwe qwe qwe qwe qwe qwe qwe qwe qwe qwe qwe qwe qwe qwe qwe qwe qwe qwe qwe'
                },
                {
                    slug: 'number2',
                    title: 'second',
                    url: 'images/dream-logo.jpg',
                    completed_description: 'zxc zxc zxc zxc zxc zxc zxc zxc zxc zxc zxc zxc zxc zxc qwe qwe qwe qwe qwe qwe qwe qwe qwe qwe qwe qwe qwe qwe qwe qwe qwe qwe qwe qwe qwe qwe qwe qwe qwe qwe'
                },
                {
                    slug: 'number3',
                    title: 'third',
                    url: 'images/carosel-item1.jpg',
                    completed_description: 'asd asd asd asd asd asd asd asd asd asd asd asd qwe qwe qwe qwe qwe qwe qwe qwe qwe qwe qwe qwe qwe qwe qwe qwe qwe qwe qwe qwe qwe qwe qwe qwe qwe qwe'
                },
                {
                    slug: 'number4',
                    title: 'fourth',
                    url: 'images/img.png',
                    completed_description: 'fgh fgh fgh fgh fgh fgh fgh fgh fgh fgh fgh fh fgh fgh qwe qwe qwe qwe qwe qwe qwe qwe qwe qwe qwe qwe qwe'
                }
            ];

            $scope.changeChosen = function(el) {
                for ($scope.chosen = 0; $scope.doneDreams[$scope.chosen].slug !== el.slug; $scope.chosen++) {}
            };

            var stop; //variable for interval function
            $scope.sliding = function() {
                stop = $interval(function() {
                    $scope.chosen++;
                    if ($scope.chosen > 3) {
                        $scope.chosen = 0;
                    }
                }, 2000);//TODO 5000
            };
            $scope.resetSliding = function() {
                $interval.cancel(stop);
                $scope.sliding();
            };
            angular.element( document.querySelector( '#carousel' ) ).on('$destroy', function() {
                $interval.cancel(stop);
            });

        },
        templateUrl: 'templates/carousel.html'
    };
});