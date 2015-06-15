angular
    .module('TrainStationServices')
    .service('stationService', ['$http', function($http) {
    
        this.getAll = function() {
            return $http.get('data/trainstations.json');
        }
    }]);
