
function loadMap(map){
  if (map == "Cave"){
    changecanvas("#a0a0a0");
    addobject(0, canvasy - (10), canvasx, 10, "#505050", "rect", false);
    addobject(60, canvasy - (30), 20, 20, "#505050", "rect", false);
    addobject(100, canvasy - (50), 20, 40, "#505050", "rect", false);
    addobject(140, canvasy - (70), 20, 60, "#505050", "rect", false);
    addobject(220, canvasy - (90), 80, 20, "#505050", "rect", false);

  }
}