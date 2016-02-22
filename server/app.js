'use strict';

// Set default node environment to development
process.env.NODE_ENV = process.env.NODE_ENV || 'local';

var express = require('express');
var config = require('./config/environment');
// Setup server
var app = express();
var server = require('http').createServer(app);

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Credentials', true);
  // res.header('Access-Control-Allow-Origin', 'http://localhost:8100');
  var oneof = false;
  if(req.headers.origin) {
    res.header('Access-Control-Allow-Origin', req.headers.origin);
    oneof = true;
  }
  if(req.headers['access-control-request-method']) {
    res.header('Access-Control-Allow-Methods', req.headers['access-control-request-method']);
    oneof = true;
  }
  if(req.headers['access-control-request-headers']) {
    res.header('Access-Control-Allow-Headers', req.headers['access-control-request-headers']);
    oneof = true;
  }
  if(oneof) {
    res.header('Access-Control-Max-Age', 60 * 60 * 24 * 365);
  }

  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH');
  res.header('Access-Control-Allow-Headers', 'Cache-Control, Pragma, Origin, Authorization, Content-Type, X-Requested-With, Accept');
  // intercept OPTIONS method
  if (oneof && req.method == 'OPTIONS') {
      res.send(200);
  } else {
    next();
  }
});

var io = require('./socket.js')(server);
config.clients = io;
require('./config/express')(app);
require('./routes')(app);

var mongoose = require('mongoose');
mongoose.connect(config.db.mongodb);
require('./seed.js');
require('./migrate.js');

server.listen(config.port, config.ip, function() {
  console.log('Express server listening on %d, in %s mode', config.port, app.get('env'));
});

// Expose app
exports = module.exports = app;
