var player;
var socket;
var username = 'lynnlo';
var points = 0;
var map = "";
var slider1
var output1
var slider2
var output2

function onload_index(){
  slider1 = document.getElementById("down");
  output1 = document.getElementById("cooldown");
  output1.innerHTML = slider1.value + " ticks";

  slider1.oninput = function () {
    output1.innerHTML = this.value + " ticks";
  }

  slider2 = document.getElementById("move");
  output2 = document.getElementById("movement");
  output2.innerHTML = slider2.value + "0%";

  slider2.oninput = function () {
    output2.innerHTML = this.value + "0%";
  }

  slider3 = document.getElementById("grav");
  output3 = document.getElementById("gravity");
  output3.innerHTML = slider3.value + "0%";

  slider3.oninput = function () {
    output3.innerHTML = this.value + "0%";
  }
}

function connectgame(){
  jcd = slider1.value
  mf = (slider2.value / 10) * 2
  gf = (slider3.value / 10) * 2
  window.location = "game.html" + "?" + jcd + "+" + mf + "+" + gf;
}

function onload_game() {
  socket = io();
  qS = decodeURIComponent(window.location.search).substr(1)
  qS = qS.split("+")
  set_settings(parseFloat(qS[0]), parseFloat(qS[1]), parseFloat(qS[2]));
  init(document.getElementById("maincanvas"));
  loadMap("Cave");
  player = addobject(0, canvasy - 50, 20, 20, "#000000", "imag", true, "Images/PlayerRectangleSimple.png");
  control(player);
  score = addobject(canvasx - 100, 20, 40, 10, "#000000", "text", false, "Points : 0",false);
  key = addobject(canvasx - 40, canvasy - 60, 20, 20, "#000000", "rect");
  target(key);
  socket.emit('init', player);
  ticklist(function () {
    score["source"] = points;
  });
  ticklist(function () {
    socket.emit('updateposition', [player["posx"] / scalex, player["posy"] / scaley]);
  });
  ticklist(function () {
    if (key["touched"] == player){
      socket.emit('win');
    }
  });
  socket.on('getallplayers', function(data) {
    console.log("got players")
    console.log(data)
    for (const t in data){
      console.log(t)
      Objects.push(data[t])
    }
  })
  
  socket.on('getposition', function(data) {
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
      if (Objects[i]["playerid"] == data) {
        delete Objects[i];
      }
    }
  })
}

