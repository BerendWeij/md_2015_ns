(function() {
    'use strict';

    angular
        .module('TrainStationController')
        .controller('StationController', ['$scope', 'getStations', stationController]);
                
        function stationController($scope, getStations) {
        
            $scope.stations = "";

            $scope.searchQuery = "";

            $scope.searchType = "";

            $scope.selectedStation = "";

            $scope.getAllStations = function() {
                $scope.stations = getStations.getAll();
            };
        };

})();
