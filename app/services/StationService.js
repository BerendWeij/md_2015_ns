angular
    .module('TrainStationServices')
    .service('getStations', ['$http', function($http) {
    
        this.getAll = function() {
            $http.get('data/trainstations.json').then(function(object) {
                return object.data;
            });
        }
    }]);
