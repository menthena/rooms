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
  res.header('Access-Control-Allow-Origin', 'null');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Cache-Control, Pragma, Origin, Authorization, Content-Type, X-Requested-With, Accept');
  next();
});

require('./config/express')(app);
require('./routes')(app);

var mongoose = require('mongoose');
mongoose.connect(config.db.mongodb);
require('./seed.js');
require('./migrate.js');
require('./socket.js');

server.listen(config.port, config.ip, function() {
  console.log('Express server listening on %d, in %s mode', config.port, app.get('env'));
});

// Expose app
exports = module.exports = app;
