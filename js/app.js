angular.module('app', ['ngRoute'])
.run(["$rootScope", function($rootScope) {
    $rootScope.$on("$viewContentLoaded", function() {
        componentHandler.upgradeAllRegistered();
    });
}]);
