(function() {
    'use strict';

    angular
        .module('TrainStationController')
        .controller('StationController', ['$scope', '$http', stationController]);
                
        function stationController($scope, $http) {
        
            $scope.stations = "";

            $scope.searchQuery = "";

            $scope.searchType = "";

            $scope.selectedStation = "";

            $scope.showName = function(station) {
              alert('You just double clicked on: '+station.name);
            };

            $http.get('data/trainstations.json').then(function(object) {
                $scope.stations = object.data;
                //console.log(object.data)
            });

            $scope.selectStation = function(station){
                $scope.selectedStation = station;
            }

        };

})();
