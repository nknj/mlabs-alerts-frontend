'use strict';

app.factory('UrlUtils', function ($location) {

  var modifyUrl = function (url) {
    $location.url('/?url=' + encodeURIComponent(url));
  };

  var validateUrl = function (url) {
    return (url.indexOf('http://') === 0 || url.indexOf('https://') === 0);
  };

  return {
    modifyUrl: function (url) {
      return modifyUrl(url);
    },
    validateUrl: function (url) {
      return validateUrl(url);
    }
  };
});
