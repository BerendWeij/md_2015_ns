angular
    .module('TrainStationApp')
    .config(function ($translateProvider) {
      $translateProvider.translations('nl', {
        TITLE: 'Trein station app',
        X_BTN: 'terug',

      });
      $translateProvider.translations('en', {
        TITLE: 'Train station app',
        X_BTN: 'back',

      });
      $translateProvider.preferredLanguage('nl');
    })
    .controller('Ctrl', function ($scope, $translate) {
  $scope.changeLanguage = function (key) {
    $translate.use(key);
  };
});
