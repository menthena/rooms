'use strict';

var WebSocketServer = require('ws').Server;
var config = require('./config/environment');

module.exports = function(server) {
  if (server) {
    var io = new WebSocketServer({server: server})

    io.on('connection', function (socket) {
      config.socket = socket;
    });

    return io.clients;
  }
};
