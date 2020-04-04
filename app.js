const express = require("express");
const app = express();
const http = require("http").Server(app);
const io = require("socket.io")(http);
const path = require("path");

var rooms = {};

gamedir = path.join(__dirname, "Game");

console.log(gamedir)
app.use(express.static(gamedir));


http.listen(3000, function () {
    console.log("Starting Server");
})


io.on('connect', function (socket) {
    console.log("new connection");
    socket.on('init', function (data, room) {
        data["isplayer"] = false;
        data["playerid"] = socket.id;
        data["room"] = room;
        socket.room = room;
        if (typeof rooms[room] == "undefined") {
            rooms[room] = {};
        }
        socket.join(room);
        socket.to(room).emit('newplayer', data);
        io.to(socket.id).emit('getallplayers', rooms[room]);
        rooms[room][socket.id] = data;
    })
    socket.on('updateposition', function (data) {
        socket.to(socket.room).emit('getposition', [socket.id, data]);
        rooms[socket.room][socket.id]["posx"] = data[0];
        rooms[socket.room][socket.id]["posy"] = data[1];
    })
    socket.on('disconnect', function () {
        io.to(socket.room).emit('lostplayer', socket.id);
        delete rooms[socket.room][socket.id];
        console.log("lost connection");
    })
})