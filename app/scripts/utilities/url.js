'use strict';

app.factory('UrlUtils', function ($location) {

  var modifyUrl = function (id) {
    $location.path('/' + id);
  };

  var validateUrl = function (url) {
    return (url.indexOf('http://') === 0 || url.indexOf('https://') === 0);
  };

  return {
    modifyUrl: function (id) {
      return modifyUrl(id);
    },
    validateUrl: function (url) {
      return validateUrl(url);
    }
  };
});
