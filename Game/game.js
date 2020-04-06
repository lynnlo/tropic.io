var player;
var socket;
var username = '';
var onmap = 0;
var points = 0;
var port;
var input1;
var input2;
var slider1;
var output1;
var slider2;
var output2;
var output3;
var fs = false;
var mapchanged = false;

function onload_index(){
  input1 = document.getElementById("port");

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

  input1.value = Math.random() * 100000000000000000
}

function connectconector(){
  pt = input1.value;
  jcd = slider1.value;
  mf = (slider2.value / 10) * 2;
  gf = (slider3.value / 10) * 2;
  window.location = "connector.html" + "?" + pt + "+" + jcd + "+" + mf + "+" + gf;
}

function change_map(){
  removeall = true;
  setTimeout(function(){
    mapchanged = false;
    if (onmap == 0){
      loadMap("Lobby");
    }
    else if (onmap == 1){
      loadMap("Beach");
    }
    else if (onmap == 2){
      loadMap("Beach2");
    }
    else if (onmap == 3){
      loadMap("Beach3");
    }
    else if (onmap == 4){
      loadMap("Beach4");
    }
    else if (onmap == 5){
      loadMap("Beach5");
    }
    else if (onmap == 6){
      loadMap("Beach6");
    }
    else if (onmap >= 7){
      onmap = 0;
      loadMap("Lobby");
    }
  }, 20 * slowmofactor)
}

function onload_connector(){
  input2 = document.getElementById("username");
  output3 = document.getElementById("link");

  output3.value = window.location;

  qS = decodeURIComponent(window.location.search).substr(1)
  qS = qS.split("+")
}

function connectgame(){
  window.location = "game.html" + "?" + qS[0] + "+" + qS[1] + "+" + qS[2] + "+" + qS[3] + "+" + input2.value;
}

function onload_game() {
  socket = io();

  qS = decodeURIComponent(window.location.search).substr(1)
  qS = qS.split("+");
  username = qS[4];
  port = qS[0];
  set_settings(parseFloat(qS[1]), parseFloat(qS[2]), parseFloat(qS[3]));

  init(document.getElementById("maincanvas"));

  change_map();
  player = addobject(0, canvasy - 60, 18, 18, "#000000", "imag", true, "Images/PlayerRectangleSimple.png");
  control(player, username);
  score = addobject(canvasx - 200, 100, 40, 10, "#000000", "text", false, "Points : 0", false);

  socket.emit('init', player, port);
  ticklist(function () {
    score["source"] = "Points :" + points;
  });
  ticklist(function () {
    socket.emit('updateposition', [(player["posx"]), (player["posy"])]);
  });
  ticklist(function () {
    if (typeof key != "undefined"){
      if (key["touched"] == player && mapchanged == false){
        socket.emit('win');
        points += 1;
        mapchanged = true;
        onmap += 1;
        change_map();
      }
    }
    
  });
  socket.on('getallplayers', function(data) {
    for (const t in data){
      Objects.push(data[t])
      followtext = addobject(data[t]["posx"], data[t]["posx"], 20, 10, "#000000", "text", false, data[t]["username"], false);
      followtext["clearable"] = false;
      followtext["playerid"] = data[t]["playerid"];
    }
  });
  
  socket.on('getposition', function(data) {
    for (i = 0; i < Objects.length; i++) {
      if (typeof Objects[i] != "undefined"){
        if (Objects[i]["playerid"] == data[0]) {
          if (Objects[i]["type"] == "text"){
            Objects[i]["posx"] = data[1][0] - 5;
            Objects[i]["posy"] = data[1][1] - 10;
          }
          else{
            Objects[i]["posx"] = data[1][0];
            Objects[i]["posy"] = data[1][1]; 
          }
        }
      }
    }
  });
  
  socket.on('newplayer', function (data) {
    Objects.push(data);
    followtext = addobject(data["posx"], data["posx"], 20, 10, "#000000", "text", false, data["username"], false);
    followtext["clearable"] = false;
    followtext["playerid"] = data["playerid"];
  });
  
  socket.on('changeallmaps', function(){
    onmap += 1;
    change_map();
  })

  socket.on('lostplayer', function (data) {
    for (i = 0; i < Objects.length; i++) {
      if (Objects[i]["playerid"] == data) {
        delete Objects[i];
      }
    }
  });
}

