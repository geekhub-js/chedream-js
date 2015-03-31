angular.module('cheDream.api', [])

    .constant('server', 'http://api.chedream.org')

    .factory('api', function(server, $http, $loading) {
        return function(type, url, name, data) {
            if (type === 'get') {
                $loading.setDefaultOptions({
                    text: 'Loading ' + name,
                    className: 'loader',
                    spinnerOptions: {
                        radius: 20,
                        length: 0,
                        lines: 30,
                        corners: 0.5,
                        color: 'white',
                        className: 'dw-spinner',
                        top: 'auto',
                        left: 'auto'
                    }
                });
                $loading.start(name);
                return $http.get(server + url).then(function (result) {
                    $loading.finish(name);
                    console.info(result);

                    return result.data || [];
                }, function (err) {
                    $loading.finish(name);
                    console.log('Error:', err);
                });
            } else if (type === 'post') {
                $http.post(server + url, data).then(function (result) {
                    console.info(result);
                }, function (err) {
                    console.log('Error:', err);
                });
            }
        };
    });