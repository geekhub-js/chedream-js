chedreamApp.directive('uiHeader', function() {
    return {
        restrict: 'E',
        controller: function() {
            angular.element( document.querySelector( '#search-block' ) ).on('click', function() {
                angular.element( document.querySelector( '#social-title-area' )).css('display', 'none');
                document.querySelector( '#search-block' ).className = 'searching';
                document.querySelector( '.field-search' ).focus();

            });
        },
        templateUrl: 'templates/header.html'
    };
});