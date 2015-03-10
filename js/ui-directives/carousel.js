chedreamApp.directive('uiCarousel', function() {
    return {
        restrict: 'E',
        scope: {},
        controller: function($scope, api, $interval, $state) {
            api('/dreams?limit=4&status=compleated&sort_by=updatedAt&sort_order=DESC', 'carousel').then(function (data) {
                $scope.doneDreams = data.dreams;
            });

            $scope.changeChosen = function(el) {
                //going to another page - dream
//                if ($scope.doneDreams[$scope.chosen].id === el.id) {
//                    $state.go('<some state>');
//                }
                for ($scope.chosen = 0; $scope.doneDreams[$scope.chosen].slug !== el.slug; $scope.chosen++) {}
            };

            var stop; //variable for interval function
            $scope.sliding = function() {
                stop = $interval(function() {
                    $scope.chosen++;
                    if ($scope.chosen > 3) {
                        $scope.chosen = 0;
                    }
                }, 5000);
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