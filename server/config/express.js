/**
 * Express configuration
 */

 'use strict';

var express = require('express'),
    favicon = require('static-favicon'),
    morgan = require('morgan'),
    compression = require('compression'),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override'),
    cookieParser = require('cookie-parser'),
    errorHandler = require('errorhandler'),
    path = require('path'),
    config = require('./environment'),
    enforce = require('express-sslify');

module.exports = function(app) {
  var env = app.get('env');

  app.set('views', config.root + '/server/views');
  app.set('API_NAME', config.API_NAME);
  app.engine('html', require('ejs').renderFile);
  app.set('view engine', 'html');
  app.use(compression());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  app.use(methodOverride());
  app.use(cookieParser());

  if (env === 'production') {
    app.use(enforce.HTTPS(true));
    app.use(favicon(path.join(config.root, 'public', 'favicon.ico')));
    app.use(express.static(path.join(config.root, 'public')));
    app.set('appPath', config.root + '/public');
    app.use(morgan('dev'));
  }

  if (env === 'development') {
    app.use(require('connect-livereload')());
    app.use(express.static(path.join(config.root, '.tmp')));
    app.use(express.static(path.join(config.root, 'dist/app')));
    app.use('/node_modules', express.static(__dirname + '/../../node_modules/'));
    app.use('/jspm_packages', express.static(__dirname + '/../../jspm_packages/'));
    app.set('appPath', 'dist/app');
    app.use(morgan('dev'));
    app.use(errorHandler()); // Error handler - has to be last
  }
};
