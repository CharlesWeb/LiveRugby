var express = require('express');
var app = express();

var http = require('http').Server(app);

var fs = require('fs');
var socket = require('socket.io');

/*var page = null;
fs.readFile('./index.html', function(err, data){
  page = data;
  console.log(page)
});

var server = http.createServer(function (req, res){
  res.end('hello');
});*/

app.get('/', function(req, res){
  res.sendFile('index.html');
});

server.listen(3000);
