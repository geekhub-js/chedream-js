angular.module('cheDream.api', [])

    .constant('server', 'http://api.chedream.org')

    .factory('api', function(server, $http, $loading) {
        return function(url, name) {
            $loading.setDefaultOptions({
                className: 'loader'
            });
            $loading.start(name);
            return $http.get(server + url).then(function(result) {
                $loading.finish(name);
                console.info(result);

                return result.data || [];
            }, function(err) {
                $loading.finish(name);
                console.log('Error:', err);
            });
        };
    });