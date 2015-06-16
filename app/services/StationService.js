(function() {
    'use strict';

    angular
        .module('TrainStationController')
        .service('stationService', ['$http', function($http) {
        
        var BASE_URL = 'http://localhost:8000';

        /*
         * @response json
         * Search only by location
         */
        this.getByLocation = function(keywords) {
            return $http.get(BASE_URL + '/api/search/location/' + keywords);
        }

        /*
         * @response json
         * Search only by type
         */
        this.getByType = function(type) {
            return $http.get(BASE_URL + '/api/search/typelist/' + type);
        }

        /*
         * @response json
         * Retrieve the full type list
         */
        this.getTypeList = function() {
            return $http.get(BASE_URL + '/api/typelist');
        }

        /*
         * @response json
         * Search only by location and type
         */
        this.get = function(keywords, type) {
            return $http.get(BASE_URL + '/api/search/' + keywords + '/' + type);
        }

        }]);

})();
