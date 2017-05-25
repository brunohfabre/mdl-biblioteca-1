angular.module('app').controller('unitsCtrl', function($scope, $http) {
    var loadUnit = function() {
        $http.get('http://localhost:3003/api/units/').then(function (response) {
            $scope.units = response.data
        });
    };

    var loadRoom = function() {
        $http.get('http://localhost:3003/api/rooms/').then(function (response) {
            $scope.rooms = response.data
        });
    };

    $scope.addUnit = function(unit) {
        $http.post('http://localhost:3003/api/units/', unit).then(function (response) {
            delete $scope.unit;
            loadUnit();
        });
    };

    $scope.deleteUnit = function(unit) {
        $http.delete('http://localhost:3003/api/units/' + unit._id).then(function (response) {
            loadUnit();
        });
    };

    loadUnit();
    loadRoom();
});
