angular
    .module('TrainStationServices')
    .service('stationService', ['$http', function($http) {

        var BASE_URL = 'http://localhost:8000';
    
        this.getByLocation = function(keywords) {
            return $http.get(BASE_URL + '/api/search/location/' + keywords);
        }

        this.getByType = function(type) {
            return $http.get(BASE_URL + '/api/search/stationtype/' + type);
        }

        this.getTypeList = function() {
            return $http.get(BASE_URL + '/api/typelist');
        }

    }]);
