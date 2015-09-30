var express = require('express');
var app = express();
var http = require('http').Server(app);
var fs = require('fs'); // not needed anymore
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

app.get('/admin', function(req, res){
  res.sendFile(__dirname + '/admin.html');
});

io.on('connection', function(socket){
  console.log('a user connected');

  //send to front-office
  socket.emit('news', 'welcome');

  //listen to-back office
  socket.on('message', function(body){
    socket.broadcast.emit('news', body);
  });

  socket.on('position', function(pos){
    socket.broadcast.emit('position', pos);
  });

});

http.listen(3000);
