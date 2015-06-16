(function() {
    'use strict';

    angular
        .module('TrainStationController')
        .controller('StationController', ['$scope', '$http', '$localStorage', 'stationService',
                     stationController]);
                
        function stationController($scope, $http, $localStorage, stationService) {
            $scope.stations = "";
            $scope.searchQuery = "";
            $scope.searchType = "";
            $scope.selectedStation = "";

            $scope.$storage = $localStorage;
            // Easily clear the current history by uncommenting:
            // $scope.$storage.sessionHistory = [];
            $scope.updateLocalStorage = function(query)
            {
                $scope.$storage.sessionHistory = {
                    query: query,
                    date: new Date(),
                };
            }

            $scope.getStationByLocation = function(keywords) {
                stationService.getByLocation(keywords).success(function(object) {
                    //$scope.stations = object
                    console.log(object)
                });
            }

            $scope.getStationByType = function(type) {
                stationService.getByType(type).success(function(object) {
                    //$scope.stations = object;
                    console.log(object);
                });
            }

            /*$http.get('data/trainstations.json').success(function(object) {
                $scope.stations = object.data;
                //console.log(object.data)
            });*/

            $scope.selectStation = function(station) {
                $scope.selectedStation = station;
                $scope.map = { center: { latitude: station.geoLat, longitude: station.geoLong }, zoom: 15};
                
                $scope.marker = {
                    id: 5,
                    coords: {
                        latitude: station.geoLat,
                        longitude: station.geoLong
                    }
                };
            }

        };

})();
