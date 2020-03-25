var player;

function onload(){
  init(document.getElementById("maincanvas"));
  loadMap_Test()
  player = addobject(0, 0, 20, 20, "#000000", "circ");
  control(player);
  score = addobject(canvasx - 50, 10, 50, 10, "#000000", "text", false, "Hello",false);
  ticklist(function(){score["source"] = jumpedcool})
}