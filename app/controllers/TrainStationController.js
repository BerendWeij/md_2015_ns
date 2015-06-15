(function() {
    'use strict';

    angular
        .module('TrainStationController')
        .controller('StationController', ['$scope', '$http', '$localStorage', 
                     stationController]);
                
        function stationController($scope, $http, $localStorage) {
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
