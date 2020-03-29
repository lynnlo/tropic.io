const express = require("express");
const app = express()
const http = require("http").Server(app);
const io = require("socket.io")(http);
const path = require("path")

var players = []

gamedir = path.join(__dirname, "Game")

console.log(gamedir)
app.use(express.static(gamedir))

http.listen(3000, function(){
    console.log("Listening")
})

io.on('connect', function(socket){
    console.log("new connection")
    socket.on('initget', function(data){
        data["isplayer"] = false;
        data["playerid"] = socket.id;
        socket.broadcast.emit('newplayer', data);
        io.to(socket.id).emit('getallplayers', players);
        socket.playerid = players.push(data) - 1;
    })
    socket.on('updateposition', function(data){
        socket.broadcast.emit('getposition', [socket.id, data]);
        players[socket.playerid]["posx"] = data[0];
        players[socket.playerid]["posy"] = data[1];
    })
    socket.on('printobj', function(data){
        console.log(players);
    })
    socket.on('disconnecting', function(){
        socket.broadcast.emit('lostplayer', players[socket.playerid]);
        players.slice(socket.playerid, 1);
        console.log("lost connection");
    })
})
