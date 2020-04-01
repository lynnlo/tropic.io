const express = require("express");
const app = express()
const http = require("http").Server(app);
const io = require("socket.io")(http);
const path = require("path")

var players = []

gamedir = path.join(__dirname, "Game")

console.log(gamedir)
app.use(express.static(gamedir))


http.listen(3000, function () {
    console.log("Starting Server")
})

/*
io.on('connect', function(socket){
    console.log("new connection")
    socket.on('initget', function(data){
        data["isplayer"] = false;
        data["playerid"] = socket.id;
        socket.broadcast.emit('newplayer', data);
        io.to(socket.id).emit('getallplayers', players);
        players[socket.id] = data;
    })
    socket.on('updateposition', function(data){
        socket.broadcast.emit('getposition', [socket.id, data]);
        players[socket.id]["posx"] = data[0];
        players[socket.id]["posy"] = data[1];
    })
    socket.on('printobj', function(){
        console.log(players);
    })
    socket.on('disconnecting', function(){
        io.emit('lostplayer', socket.id);
        delete players[socket.id];
        console.log("lost connection");
    })
})
*/