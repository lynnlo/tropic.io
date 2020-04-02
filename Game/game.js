var player;
var socket = io();
var username = 'lynnlo';
var points = 0;

function onload() {
  init(document.getElementById("maincanvas"));
  loadMap("Cave");
  player = addobject(0, 0, 20, 20, "#000000", "imag", true, "Images/PlayerRectangleSimple.png");
  control(player);
  score = addobject(canvasx - 100, 20, 40, 10, "#000000", "text", false, "Points : 0",false);
  socket.emit('initget', player);
  ticklist(function () {
    score["source"] = points
  });
  ticklist(function () {
    socket.emit('updateposition', [player["posx"] / scalex, player["posy"] / scaley])
  });
}

socket.on('getallplayers', function (data) {
  console.log(data)
  data.forEach(function(i){
    Objects.push(i)
  })
})

socket.on('getposition', function (data) {
  for (i = 0; i < Objects.length; i++) {
    if (Objects[i]["playerid"] == data[0]) {
      Objects[i]["posx"] = data[1][0] * scalex;
      Objects[i]["posy"] = data[1][1] * scaley;
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