'use strict';

app.controller('MainCtrl', function ($scope, $window, $location, $sce, $routeParams, UrlUtils) {
  /*
  * URL Errors:
  * 0 - No Error
  * 1 - Invalid URL format
  */

  // Set defaults
  $scope.urlError = 0;
  $scope.articleIndex = 0;

  // Dummy Data
  $scope.articles = [
    {
      id: 12,
      title: 'Did ocean device capture Flight MH370\'s end?',
      url: 'http://edition.cnn.com/2014/05/29/world/asia/mh370-sound-search/index.html?hpt=hp_c1',
      matchCompany: 'Malaysian Airlines',
      matchCompanyLogo: '/images/malaysian_airlines.png'
    },
    {
      id: 13,
      title: '13 things to expect from Apple at WWDC 2014',
      url: 'http://www.theverge.com/2014/5/29/5759884/apple-wwdc-rumors-2014-what-to-expect',
      matchCompany: 'Apple',
      matchCompanyLogo: '/images/apple.png'
    },
    {
      id: 14,
      title: 'Twitter’s ‘Zero’ Service Lets Emerging Markets Tweet For Free',
      url: 'http://techcrunch.com/2014/05/29/twitters-emerging-market-strategy-includes-its-own-version-of-a-facebook-zero-like-service-called-twitter-access/',
      matchCompany: 'Twitter',
      matchCompanyLogo: '/images/twitter.png'
    }
  ];

  // Util Functions
  var setUrl = function () {
    $scope.currentArticle = $scope.articles[$scope.articleIndex];
    $scope.url = $scope.currentArticle.url;
    if ($scope.url && UrlUtils.validateUrl($scope.url)) {
      $scope.nextArticle = $scope.articles[$scope.articleIndex + 1];
      // UrlUtils.modifyUrl(currentArticle.id);
      $scope.trustedUrl = $sce.trustAsResourceUrl($scope.url);
    } else {
      $scope.urlError = 1;
    }
  };

  // Set URL
  setUrl();

  // Event handlers
  $scope.next = function () {
    $scope.urlError = 0;
    $scope.articleIndex ++;
    setUrl();
  };

  $scope.first = function () {
    $scope.urlError = 0;
    $scope.articleIndex = 0;
    setUrl();
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
