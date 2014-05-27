'use strict';

app.factory('IFrameUtils', function ($window) {

  var checkIFrame = function () {
    var ifr = $window.document.getElementsByTagName('iframe')[0];
    console.log('chcek: '+ ifr.contentDocument.location);
    return ifr.contentDocument.location;
  };

  return {
    checkIFrame: function () {
      return checkIFrame();
    }
  };
});
