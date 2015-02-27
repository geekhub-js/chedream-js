angular.module('contacts.controller', [
    'contacts.model'
])
    .controller('ContactsCtrl', function($scope, contacts, $rootScope) {
        $rootScope.title= 'Черкаська мрія - Контакти';
        $scope.info = contacts.getInfo();
    });