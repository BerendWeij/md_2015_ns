(function() {
    'use strict';

    angular
        .module('TrainStationController')
        .controller('StationController', ['$scope', 'stationService', stationController]);
                
        function stationController($scope, stationService) {
        
            $scope.stations = "";
            
            $scope.searchQuery = "";

            $scope.searchType = "";

            $scope.selectedStation = "";

            stationService.getAll().then(function(object) {
                //$scope.stations = object.data;
                console.log(object.data);
            });

            $scope.selectStation = function(station){
                $scope.selectedStation = station;
            }
        };

})();
