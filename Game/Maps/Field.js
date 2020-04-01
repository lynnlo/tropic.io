
function loadMap(map){
  if (map == "Field"){
    changecanvas("#a0c0e0", "Images/BackgroundSky.png");
    addobject(0, canvasy - (10), canvasx, 10, "#306530", "imag", true, "Images/MaterialGrass.png");
    addobject(64, canvasy - (30), 20, 20, "#606060", "imag", true,"Images/MaterialStone.png");
    addobject(94, canvasy - (50), 20, 40, "#606060", "imag", true,"Images/MaterialStone.png");
    addobject(124, canvasy - (70), 20, 60, "#606060", "imag", true,"Images/MaterialStone.png");
    addobject(154, canvasy - (50), 20, 40, "#606060", "imag", true,"Images/MaterialStone.png");
    addobject(184, canvasy - (30), 20, 20, "#606060", "imag", true,"Images/MaterialStone.png");
  }
}