var player;
var socket = io();
var username = 'lynnlo';
var points = 0;

function onload() {
  init(document.getElementById("maincanvas"));
  loadMap_Cave();
  player = addobject(0, 0, 20, 20, "#000000", "imag", true, "Images/PlayerRectangleSimple.png");
  control(player);
  score = addobject(canvasx - 50, 10, 50, 10, "#000000", "text", false, "Hello", false);
  socket.emit('initget', player);
  ticklist(function () {
    score["source"] = points
  });
  ticklist(function () {
    socket.emit('updateposition', [player["posx"], player["posy"]])
  });
}

socket.on('getallplayers', function (data) {
  for (i = 0; i < data.length; i++) {
    Objects.push(data[i]);
  }
})

socket.on('getposition', function (data) {
  for (i = 0; i < Objects.length; i++) {
    if (Objects[i]["playerid"] == data[0]) {
      Objects[i]["posx"] = data[1][0];
      Objects[i]["posy"] = data[1][1];
    }
  }
})

socket.on('newplayer', function (data) {
  Objects.push(data);
})

socket.on('lostplayer', function (data) {
  for (i = 0; i < Objects.length; i++) {
    if (Objects[i]["playerid"] == data && data != socket.id) {
      delete Objects[i];
    }
  }
})