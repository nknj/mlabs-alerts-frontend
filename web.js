'use strict';

var gzippo = require('gzippo');
var express = require('express');
var logger = require('morgan');
var h5bp = require('h5bp');

var nodeApp = express();

nodeApp.use(h5bp({
  root: __dirname + '/dist'
}));
nodeApp.use(logger('dev'));
nodeApp.use(gzippo.staticGzip('' + __dirname + '/dist'));
nodeApp.listen(process.env.PORT || 5555);
