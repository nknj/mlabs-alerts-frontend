'use strict';

app.controller('MainCtrl', function ($scope, $window, $sce) {
  // Set defaults
  $scope.url = 'http://bbc.co.uk';
  $scope.trustedUrl = $sce.trustAsResourceUrl($scope.url);

  // Event handlers
  $scope.buttonClick = function() {
    $scope.trustedUrl = $sce.trustAsResourceUrl($scope.url);
  };

  // Twitter Share
  $scope.twitterShare = function() {
    $window.open('https://twitter.com/share' +
      '?url=http%3A%2F%2Fmeltwaterlabs.com%3A8003%2Falerts%2F' +
      '&text=I%20just%20read%20the%20article%20' +
        $window.encodeURIComponent($scope.url) +
        ' using%20%40mLabsAlerts!%20Check%20it%20out%3A%20');
  };

  // Facebook Share
  $scope.facebookShare = function () {
    $window.open(
      'https://www.facebook.com/dialog/feed?' +
        'app_id=250155698514314&' +
        'link=http://meltwaterlabs.com:8003/alerts&' +
        'name=I%20just%20read%20an%20article%20with%20mLabs%20Alerts!&' +
        'caption=' + $window.encodeURIComponent($scope.url) + '&' +
        'description=mLabs%20Alerts%20is%20the%20easiest%20way%20to%20find%20the' +
          '%20latest%20and%20most%20relevant%20articles%20about%20your%20favorite%20companies%20online.%20Click%20here%20to%20check%20it%20out!&' +
        'redirect_uri=http://facebook.com/'
    );
  };
});
