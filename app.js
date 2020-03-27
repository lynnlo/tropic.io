var express = require("express");
var http = require("http");
var path = require("path");
var socket = require("socket.io");
var app = express();
var server = http.Server(app);
var io = socket(server);
app.set('port', 100)
app.use(__dirname+'/user', express.static(__dirname+'/user'));
app.get('/', function(request, response){
    response.sendFile(__dirname+'/index.html')
})
server.listen(100, function(){
    console.log("starting");
})