angular.module('app', ['ui.router'])
.run(["$rootScope", function($rootScope) {
    $rootScope.$on("$viewContentLoaded", function() {
        componentHandler.upgradeAllRegistered();
    });
}]);
