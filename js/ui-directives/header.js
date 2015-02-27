chedreamApp.directive('uiHeader', function() {
    return {
        restrict: 'E',
        controller: function() {
            angular.element( document.querySelector( '#search-block' ) ).on('click', function() {
                angular.element( document.querySelector( '#social-title-area' )).css('display', 'none');
                document.querySelector( '#search-block' ).className = 'searching';
                document.querySelector( '.field-search' ).focus();
            });
            angular.element( document.querySelector( '.field-search' ) ).on('focusout', function() {
                angular.element( document.querySelector( '#social-title-area' )).css('display', 'block');
                document.querySelector( '#search-block' ).className = '';
            });
        },
        templateUrl: 'templates/header.html'
    };
});