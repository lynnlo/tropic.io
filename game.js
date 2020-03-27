var player;
var socket = io();

function onload(){
  init(document.getElementById("maincanvas"));
  loadMap_Field()
  player = addobject(0, 0, 20, 20, "#000000", "circ");
  control(player);
  score = addobject(canvasx - 50, 10, 50, 10, "#000000", "text", false, "Hello",false);
  ticklist(function(){score["source"] = jumpedcool})
  ticklist(function(){socket.emit("position", [player["posx"],player["posy"]])})
}

socket.on("position", function(data){
  console.log(data);
})