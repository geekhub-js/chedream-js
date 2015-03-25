chedreamApp.directive('uiCarousel', function() {
    return {
        restrict: 'E',
        scope: {},
        controller: function($scope, api, $state) {
            api('/dreams?count=4', 'carousel').then(function (data) {
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

            $scope.changeChosen = function(index, currentSlug) {
                if ($scope.chosen == index) {
                    $state.go( 'dream', { slug: currentSlug } );
                } else {
                    $scope.chosen = index;
                }
            };

            var firstPositionX = 0,
                firstPositionY = 0;
            angular.element( document.getElementById('carousel').querySelector('.carosel-wrapper') )
                .on('mousedown', function(e) {
                    firstPositionX = e.clientX;
                    firstPositionY = e.clientY;
                })
                .on('mouseup', function(e) {
                    if ( Math.sqrt( Math.pow(firstPositionX - e.clientX, 2) + Math.pow(firstPositionY - e.clientY, 2) ) < 30 ) {
                        $state.go( 'dream', { slug: $scope.doneDreams[$scope.chosen].slug } );
                    }
                })
                .on('dragstart', function(e) {
                    e.preventDefault();
                });

        },
        templateUrl: 'js/ui-directives/view/carousel.html'
    };
});