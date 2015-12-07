'use strict';

var io = require('socket.io').listen(5555);

io.sockets.on('connection', function (socket) {
  socket.emit('message', 'hello');
});

module.exports = io;
