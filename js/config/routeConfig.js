angular.module('app').config(function($routeProvider, $locationProvider) {

    $routeProvider
        .when('/', {
            templateUrl: 'views/home.html'
        })
        .when('/units', {
            templateUrl: 'views/units.html',
            controller: 'unitsCtrl'
        })

    .otherwise({redirectTo: '/'});

    $locationProvider.html5Mode(false).hashPrefix('');
})
