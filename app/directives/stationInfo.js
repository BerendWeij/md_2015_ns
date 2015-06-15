angular
    .module('TrainStationDirectives')
    .directive('stationInfo', function() {
        return {
            restrict: 'E',
            templateUrl: 'app/directives/stationInfo.html'
        }
    });
