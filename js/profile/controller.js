angular.module('profile.controller', [
    'cheDream.api'
])
    .controller('ProfileCtrl', function($scope, $rootScope, api) {
        //api('get', '/users/1.json', 'user').then(function (data) {
        //    $scope.user = data.items;
        //});
        $rootScope.title = 'Профайл';
        $scope.username = 'Інна Кулик';
    });