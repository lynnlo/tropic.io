var express = require("express");
var http = require("http");
var path = require("path");
var socket = require("socket.io");
var app = express();
var server = http.Server(app);
var io = socket(server);
app.use(__dirname+'/user', express.static(__dirname+'/user'));
app.get('/', function(request, response){
    response.sendFile(__dirname+'/index.html')
})
function startserver(port){
    app.set('port', port)
    server.listen(port, function(){
        console.log("Starting Server : "+port.toString());
    })
}
io.on('position', function(data){
    server.emit('position', data)
})

startserver(100);