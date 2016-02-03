(function() {
    function config($stateProvider, $locationProvider) {
        $locationProvider
            .html5Mode({
                enabled: true,
                requireBase: false
            });
        
        $stateProvider
            .state('landing', {
                url: '/',
                templateUrl: '/templates/landing.html'
            })
            .state('album', {
                url: '/album',
                templateUrl: '/templates/album.html'
            })
// Assigngment 3 start----------
            .state('collection', {
                url: '/collection',
                templateUrl: '/templates/collection.html'
            })
            .state('player_bar', {
                url: '/player_bar',
                templateUrl: '/templates/player_bar.html'
        });
    }
// Assigngment 3 finish----------
    
angular
    .module('blocJams', ['ui.router'])
    .config(config);
})();