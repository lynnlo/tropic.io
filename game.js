var player;

function onload(){
  init(document.getElementById("maincanvas"));
  changecanvas("#efefcf");
  player = addobject(0, 0, 20, 20, "#000000", "circ");
  control(player);
  addobject(0, canvasy - (10), canvasx, 10);
  addobject(canvasx - (10), 0, 10, canvasx);
  addobject(25,15,100,10,NaN,"text",false,"Hello",false)
}