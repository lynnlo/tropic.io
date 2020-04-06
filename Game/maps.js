function loadMap(map) {
  if (map == "Beach") {
    changecanvas("#a0a0a0", "Images/BackgroundSky.png");
    addobject(0, canvasy - (20), canvasx, 20, "#505050", "imag", false, "Images/MaterialSand.png");

    addobject(20, canvasy - (75), 60, 60, "#505050", "imag", false, "Images/DecalTree.png", false);
    addobject(160, canvasy - (75), 60, 60, "#505050", "imag", false, "Images/DecalTree.png", false);
    addobject(200, canvasy - (75), 60, 60, "#505050", "imag", false, "Images/DecalTree.png", false);
    addobject(360, canvasy - (75), 60, 60, "#505050", "imag", false, "Images/DecalTree.png", false);
    addobject(460, canvasy - (75), 60, 60, "#505050", "imag", false, "Images/DecalTree.png", false);
    addobject(500, canvasy - (75), 60, 60, "#505050", "imag", false, "Images/DecalTree.png", false);
    addobject(620, canvasy - (75), 60, 60, "#505050", "imag", false, "Images/DecalTree.png", false);
    addobject(660, canvasy - (75), 60, 60, "#505050", "imag", false, "Images/DecalTree.png", false);
    addobject(800, canvasy - (75), 60, 60, "#505050", "imag", false, "Images/DecalTree.png", false);


    addobject(60, canvasy - (30), 20, 20, "#505050", "imag", false, "Images/MaterialSand.png");
    addobject(100, canvasy - (80), 20, 60, "#505050", "imag", false, "Images/MaterialSand.png");
    addobject(140, canvasy - (40), 40, 20, "#505050", "imag", false, "Images/MaterialSand.png");

    addobject(220, canvasy - (100), 80, 20, "#505050", "imag", false, "Images/MaterialSand.png");
    addobject(340, canvasy - (120), 80, 20, "#505050", "imag", false, "Images/MaterialSand.png");

    addobject(460, canvasy - (140), 360, 20, "#505050", "imag", false, "Images/MaterialSand.png");
    addobject(canvasx - (540), canvasy - (260), canvasx - (460), 20, "#505050", "imag", false, "Images/MaterialSand.png");
    addobject(580, canvasy - (200), 20, 60, "#505050", "imag", false, "Images/MaterialSand.png");
    addobject(750, canvasy - (200), 20, 60, "#505050", "imag", false, "Images/MaterialSand.png");

    addobject(460, canvasy - (100), 20, 80, "#505050", "imag", false, "Images/MaterialSand.png");
    addobject(600, canvasy - (80), 20, 60, "#505050", "imag", false, "Images/MaterialSand.png");

    key = addobject(canvasx - 40, canvasy - 60, 20, 20, "#000000", "rect");
    target(key);
  }
  if (map == "Beach2") {
    changecanvas("#a0a0a0", "Images/BackgroundSky.png");
    addobject(0, canvasy - (20), canvasx, 20, "#505050", "imag", false, "Images/MaterialSand.png");

    addobject(20, canvasy - (75), 60, 60, "#505050", "imag", false, "Images/DecalTree.png", false);
    addobject(160, canvasy - (75), 60, 60, "#505050", "imag", false, "Images/DecalTree.png", false);
    addobject(200, canvasy - (75), 60, 60, "#505050", "imag", false, "Images/DecalTree.png", false);
    addobject(360, canvasy - (75), 60, 60, "#505050", "imag", false, "Images/DecalTree.png", false);
    addobject(460, canvasy - (75), 60, 60, "#505050", "imag", false, "Images/DecalTree.png", false);
    addobject(500, canvasy - (75), 60, 60, "#505050", "imag", false, "Images/DecalTree.png", false);
    addobject(620, canvasy - (75), 60, 60, "#505050", "imag", false, "Images/DecalTree.png", false);
    addobject(660, canvasy - (75), 60, 60, "#505050", "imag", false, "Images/DecalTree.png", false);
    addobject(800, canvasy - (75), 60, 60, "#505050", "imag", false, "Images/DecalTree.png", false);

    addobject(60, canvasy - (80), 20, 60, "#505050", "imag", false, "Images/MaterialSand.png")
    addobject(80, canvasy - (80), 20, 60, "#505050", "imag", false, "Images/MaterialSand.png");
    addobject(100, canvasy - (80), 20, 60, "#505050", "imag", false, "Images/MaterialSand.png")
    addobject(120, canvasy - (80), 20, 60, "#505050", "imag", false, "Images/MaterialSand.png");
    
    addobject(150, canvasy - (120), 60, 20, "#505050", "imag", false, "Images/MaterialSand.png");
    addobject(230, canvasy - (140), 60, 20, "#505050", "imag", false, "Images/MaterialSand.png");

    addobject(340, canvasy - (40), 20, 40, "#505050", "imag", false, "Images/MaterialSand.png");
    addobject(380, canvasy - (80), 20, 75, "#505050", "imag", false, "Images/MaterialSand.png");
    addobject(420, canvasy - (100), 20, 100, "#505050", "imag", false, "Images/MaterialSand.png");

    addobject(460, canvasy - (140), 20, 130, "#505050", "imag", false, "Images/MaterialSand.png");

    addobject(550, canvasy - (160), 75, 20, "#505050", "imag", false, "Images/MaterialSand.png");

    addobject(640, canvasy - (180), 90, 20, "#505050", "imag", false, "Images/MaterialSand.png");

    addobject(740, canvasy - (200), 100, 20, "#505050", "imag", false, "Images/MaterialSand.png");


    key = addobject(canvasx - 40, canvasy - 60, 20, 20, "#000000", "rect");
    target(key);
  }
  if (map == "Beach3") {
    changecanvas("#a0a0a0", "Images/BackgroundSky.png");
    addobject(0, canvasy - (20), canvasx, 20, "#505050", "imag", false, "Images/MaterialSand.png");

    addobject(20, canvasy - (75), 60, 60, "#505050", "imag", false, "Images/DecalTree.png", false);
    addobject(160, canvasy - (75), 60, 60, "#505050", "imag", false, "Images/DecalTree.png", false);
    addobject(200, canvasy - (75), 60, 60, "#505050", "imag", false, "Images/DecalTree.png", false);
    addobject(360, canvasy - (75), 60, 60, "#505050", "imag", false, "Images/DecalTree.png", false);
    addobject(460, canvasy - (75), 60, 60, "#505050", "imag", false, "Images/DecalTree.png", false);
    addobject(500, canvasy - (75), 60, 60, "#505050", "imag", false, "Images/DecalTree.png", false);
    addobject(620, canvasy - (75), 60, 60, "#505050", "imag", false, "Images/DecalTree.png", false);
    addobject(660, canvasy - (75), 60, 60, "#505050", "imag", false, "Images/DecalTree.png", false);
    addobject(800, canvasy - (75), 60, 60, "#505050", "imag", false, "Images/DecalTree.png", false);

    addobject(60, canvasy - (60), 20, 40, "#505050", "imag", false, "Images/MaterialSand.png")
    addobject(100, canvasy - (80), 20, 60, "#505050", "imag", false, "Images/MaterialSand.png");
    addobject(140, canvasy - (60), 20, 40, "#505050", "imag", false, "Images/MaterialSand.png")

    addobject(240, canvasy - (120), 20, 100, "#505050", "imag", false, "Images/MaterialSand.png")
    addobject(280, canvasy - (80), 20, 60, "#505050", "imag", false, "Images/MaterialSand.png");
    
    addobject(360, canvasy - (60), 20, 40, "#505050", "imag", false, "Images/MaterialSand.png")
    addobject(400, canvasy - (80), 20, 60, "#505050", "imag", false, "Images/MaterialSand.png");
    addobject(440, canvasy - (100), 20, 80, "#505050", "imag", false, "Images/MaterialSand.png")
    
    addobject(480, canvasy - (160), 120, 20, "#505050", "imag", false, "Images/MaterialSand.png")
    addobject(620, canvasy - (140), 80, 20, "#505050", "imag", false, "Images/MaterialSand.png")
    addobject(720, canvasy - (180), 80, 20, "#505050", "imag", false, "Images/MaterialSand.png")

    key = addobject(canvasx - 40, canvasy - 60, 20, 20, "#000000", "rect");
    target(key);
  }
  if (map == "Beach4") {
    changecanvas("#a0a0a0", "Images/BackgroundSky.png");
    addobject(0, canvasy - (20), canvasx, 20, "#505050", "imag", false, "Images/MaterialSand.png");

    addobject(20, canvasy - (75), 60, 60, "#505050", "imag", false, "Images/DecalTree.png", false);
    addobject(160, canvasy - (75), 60, 60, "#505050", "imag", false, "Images/DecalTree.png", false);
    addobject(200, canvasy - (75), 60, 60, "#505050", "imag", false, "Images/DecalTree.png", false);
    addobject(360, canvasy - (75), 60, 60, "#505050", "imag", false, "Images/DecalTree.png", false);
    addobject(460, canvasy - (75), 60, 60, "#505050", "imag", false, "Images/DecalTree.png", false);
    addobject(500, canvasy - (75), 60, 60, "#505050", "imag", false, "Images/DecalTree.png", false);
    addobject(620, canvasy - (75), 60, 60, "#505050", "imag", false, "Images/DecalTree.png", false);
    addobject(660, canvasy - (75), 60, 60, "#505050", "imag", false, "Images/DecalTree.png", false);
    addobject(800, canvasy - (75), 60, 60, "#505050", "imag", false, "Images/DecalTree.png", false);

    addobject(60, canvasy - (80), 20, 60, "#505050", "imag", false, "Images/MaterialSand.png")
    addobject(100, canvasy - (100), 20, 80, "#505050", "imag", false, "Images/MaterialSand.png");
    addobject(140, canvasy - (120), 20, 100, "#505050", "imag", false, "Images/MaterialSand.png")

    addobject(200, canvasy - (160), 160, 20, "#505050", "imag", false, "Images/MaterialSand.png")

    addobject(460, 0, 20, 400, "#505050", "imag", false, "Images/MaterialSand.png")
    addobject(460, canvasy - (120), 20, 100, "#505050", "imag", false, "Images/MaterialSand.png")
    addobject(500, canvasy - (100), 20, 80, "#505050", "imag", false, "Images/MaterialSand.png");
    addobject(540, canvasy - (120), 20, 100, "#505050", "imag", false, "Images/MaterialSand.png")

    addobject(620, canvasy - (140), 80, 20, "#505050", "imag", false, "Images/MaterialSand.png")
    addobject(720, canvasy - (180), 80, 20, "#505050", "imag", false, "Images/MaterialSand.png")
    addobject(840, canvasy - (160), 20, 140, "#505050", "imag", false, "Images/MaterialSand.png")

    key = addobject(canvasx - 40, canvasy - 60, 20, 20, "#000000", "rect");
    target(key);
  }
  if (map == "Beach5") {
    changecanvas("#a0a0a0", "Images/BackgroundSky.png");
    addobject(0, canvasy - (20), canvasx, 20, "#505050", "imag", false, "Images/MaterialSand.png");

    addobject(20, canvasy - (75), 60, 60, "#505050", "imag", false, "Images/DecalTree.png", false);
    addobject(160, canvasy - (75), 60, 60, "#505050", "imag", false, "Images/DecalTree.png", false);
    addobject(200, canvasy - (75), 60, 60, "#505050", "imag", false, "Images/DecalTree.png", false);
    addobject(360, canvasy - (75), 60, 60, "#505050", "imag", false, "Images/DecalTree.png", false);
    addobject(460, canvasy - (75), 60, 60, "#505050", "imag", false, "Images/DecalTree.png", false);
    addobject(500, canvasy - (75), 60, 60, "#505050", "imag", false, "Images/DecalTree.png", false);
    addobject(620, canvasy - (75), 60, 60, "#505050", "imag", false, "Images/DecalTree.png", false);
    addobject(660, canvasy - (75), 60, 60, "#505050", "imag", false, "Images/DecalTree.png", false);
    addobject(800, canvasy - (75), 60, 60, "#505050", "imag", false, "Images/DecalTree.png", false);

    addobject(60, canvasy - (60), 20, 40, "#505050", "imag", false, "Images/MaterialSand.png");
    addobject(100, canvasy - (80), 100, 60, "#505050", "imag", false, "Images/MaterialSand.png");
    addobject(120, canvasy - (100), 60, 20, "#505050", "imag", false, "Images/MaterialSand.png");
    addobject(240, canvasy - (60), 20, 40, "#505050", "imag", false, "Images/MaterialSand.png");

    addobject(400, canvasy - (60), 20, 40, "#505050", "imag", false, "Images/MaterialSand.png");
    addobject(440, canvasy - (80), 20, 60, "#505050", "imag", false, "Images/MaterialSand.png");
    addobject(480, canvasy - (100), 20, 80, "#505050", "imag", false, "Images/MaterialSand.png");
    addobject(520, canvasy - (120), 20, 100, "#505050", "imag", false, "Images/MaterialSand.png");
    addobject(560, canvasy - (140), 20, 120, "#505050", "imag", false, "Images/MaterialSand.png");

    addobject(660, canvasy - (160), 120, 20, "#505050", "imag", false, "Images/MaterialSand.png");
    addobject(710, canvasy - (140), 20, 120, "#505050", "imag", false, "Images/MaterialSand.png");


    key = addobject(canvasx - 40, canvasy - 60, 20, 20, "#000000", "rect");
    target(key);
  }
  if (map == "Beach6") {
    changecanvas("#a0a0a0", "Images/BackgroundSky.png");
    addobject(0, canvasy - (20), canvasx, 20, "#505050", "imag", false, "Images/MaterialSand.png");

    addobject(20, canvasy - (75), 60, 60, "#505050", "imag", false, "Images/DecalTree.png", false);
    addobject(160, canvasy - (75), 60, 60, "#505050", "imag", false, "Images/DecalTree.png", false);
    addobject(200, canvasy - (75), 60, 60, "#505050", "imag", false, "Images/DecalTree.png", false);
    addobject(360, canvasy - (75), 60, 60, "#505050", "imag", false, "Images/DecalTree.png", false);
    addobject(460, canvasy - (75), 60, 60, "#505050", "imag", false, "Images/DecalTree.png", false);
    addobject(500, canvasy - (75), 60, 60, "#505050", "imag", false, "Images/DecalTree.png", false);
    addobject(620, canvasy - (75), 60, 60, "#505050", "imag", false, "Images/DecalTree.png", false);
    addobject(660, canvasy - (75), 60, 60, "#505050", "imag", false, "Images/DecalTree.png", false);
    addobject(800, canvasy - (75), 60, 60, "#505050", "imag", false, "Images/DecalTree.png", false);

    addobject(100, canvasy - (60), 40, 40, "#505050", "imag", false, "Images/MaterialSand.png")
    addobject(180, canvasy - (100), 40, 80, "#505050", "imag", false, "Images/MaterialSand.png")
    addobject(260, canvasy - (140), 40, 120, "#505050", "imag", false, "Images/MaterialSand.png")
    addobject(340, canvasy - (180), 40, 160, "#505050", "imag", false, "Images/MaterialSand.png")

    addobject(460, canvasy - (60), 20, 40, "#505050", "imag", false, "Images/MaterialSand.png");
    addobject(500, canvasy - (80), 100, 60, "#505050", "imag", false, "Images/MaterialSand.png");
    addobject(520, canvasy - (100), 60, 20, "#505050", "imag", false, "Images/MaterialSand.png");
    addobject(640, canvasy - (60), 20, 40, "#505050", "imag", false, "Images/MaterialSand.png");
    addobject(750, canvasy - (120), 120, 20, "#505050", "imag", false, "Images/MaterialSand.png");
    addobject(820, canvasy - (120), 40, 100, "#505050", "imag", false, "Images/MaterialSand.png");

    key = addobject(canvasx - 40, canvasy - 60, 20, 20, "#000000", "rect");
    target(key);
  }
  if (map == "Field") {
    changecanvas("#a0c0e0", "Images/BackgroundSky.png");
    addobject(0, canvasy - (10), canvasx, 10, "#306530", "imag", true, "Images/MaterialGrass.png");
    addobject(64, canvasy - (30), 20, 20, "#606060", "imag", true, "Images/MaterialStone.png");
    addobject(94, canvasy - (50), 20, 40, "#606060", "imag", true, "Images/MaterialStone.png");
    addobject(124, canvasy - (75), 20, 60, "#606060", "imag", true, "Images/MaterialStone.png");
    addobject(154, canvasy - (50), 20, 40, "#606060", "imag", true, "Images/MaterialStone.png");
    addobject(184, canvasy - (30), 20, 20, "#606060", "imag", true, "Images/MaterialStone.png");
  }
  if (map == "Lobby") {
    changecanvas("#a0a0a0");
    addobject(0, canvasy - (20), canvasx, 20, "#505050", "rect", false);
    
    key = addobject(canvasx - 40, canvasy - 60, 20, 20, "#000000", "rect");
    target(key);
  }
}