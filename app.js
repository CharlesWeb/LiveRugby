var socket = require('socket.io');
var http = require('http');
var fs = require('fs');

var page = null;
fs.readFile('./index.html', function(err, data){
  page = data;
  console.log(page)
});

var server = http.createServer(function (req, res){
  res.end('hello');
});

server.listen(8080);
