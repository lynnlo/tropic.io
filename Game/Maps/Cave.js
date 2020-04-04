function loadMap(map) {
  if (map == "Cave") {
    changecanvas("#a0a0a0");
    addobject(0, canvasy - (10), canvasx, 10, "#505050", "rect", false);

    addobject(60, canvasy - (30), 20, 20, "#505050", "rect", false);
    addobject(100, canvasy - (70), 20, 60, "#505050", "rect", false);
    addobject(140, canvasy - (30), 40, 20, "#505050", "rect", false);

    addobject(220, canvasy - (90), 80, 20, "#505050", "rect", false);
    addobject(340, canvasy - (110), 80, 20, "#505050", "rect", false);

    addobject(460, canvasy - (130), 360, 20, "#505050", "rect", false);
    addobject(canvasx - (540), canvasy - (250), canvasx - (460), 20, "#505050", "rect", false);
    addobject(580, canvasy - (190), 20, 60, "#505050", "rect", false);
    addobject(700, canvasy - (190), 20, 60, "#505050", "rect", false);

    addobject(460, canvasy - (90), 20, 80, "#505050", "rect", false);
    addobject(600, canvasy - (70), 20, 60, "#505050", "rect", false);

    key = addobject(canvasx - 40, canvasy - 60, 20, 20, "#000000", "rect");
    target(key);
  }
}