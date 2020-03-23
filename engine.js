// Coconut Engine V 1.2.1
var Objects = [];
var keyspressed = [];
var canvas;
var context;
var screenx;
var scaley;
var canvasx;
var canvasy;
var scalex;
var scaley;
var player;
var ticker;
var scalefactor;
var jumped;

// Settings
var slowmofactor = 1;
var movementfactor = 1;
var disableclear = false;
var gravity = true;
var jumpcooldown = 60;

function onload() {
  canvas = document.getElementById("maincanvas");
  screenx = screen.width
  screeny = screen.height
  canvasx = screen.width / 5
  canvasy = screen.height / 5
  scalex = screenx / canvasx
  scaley = screeny / canvasy
  canvas.width = canvasx * scalex
  canvas.height = canvasy * scaley
  canvas.style.width = (canvasx * scalex).toString() + "px";
  canvas.style.height = (canvasy * scaley).toString() + "px";
  context = canvas.getContext("2d");
  player = addactor(0, 0, 10, 10, "#000000", "circ");
  control(player);
  addactor(0, canvasy - (10), canvasx, 10);
  ticker = setInterval(ontick, 10 * slowmofactor);

}

// Adds an instance to the Objects list
function addactor(posx, posy, width, height, color = "#000000", type = "rect", text = NaN, player = false) {
  posx = posx * scalex;
  posy = posy * scaley;
  width = width * scalex;
  height = height * scaley;
  Objects.push({
    posx,
    posy,
    width,
    height,
    color,
    type,
    text,
    player
  });
  return Objects[Objects.length - 1];
}

// Does this every tick (10 ms)
function ontick() {
  //Clears the screen
  if (disableclear == false) {
    context.clearRect(0, 0, canvasx * scalex, canvasy * scaley);
  }
  // Cools down jump
  if (jumped != 0){
    jumped -= 1;
  }
  // Repeats with every object
  for (i = 0; i < Objects.length; i++) {
    // Checks for collisions
    crashed = false;
    for (d = 0; d < Objects.length; d++) {
      if (collide(Objects[i], Objects[d])) { crashed = true; }
    }
    // Adds a gravitational pull to the object
    if (Objects[i]["posy"] + Objects[i]["height"] <= canvas.height && crashed == false && gravity == true) {
      Objects[i]["posy"] += 1 * scaley;
    }
    // Moves the controlled object
    if (Objects[i]["player"]) {
      if (keyspressed["w"] && Objects[i]["posy"] - movementfactor * scaley >= 0) {
        Objects[i]["posy"] -= movementfactor * scaley;
      }
      if (keyspressed["a"] && Objects[i]["posx"] - movementfactor * scaley >= 0) {
        Objects[i]["posx"] -= movementfactor * scalex;
      }
      if (keyspressed["s"] && Objects[i]["posy"] + Objects[i]["height"] + movementfactor * scaley <= screeny) {
        Objects[i]["posy"] += movementfactor * scaley;
      }
      if (keyspressed["d"] && Objects[i]["posx"] + Objects[i]["width"] + movementfactor * scalex <= screenx) {
        Objects[i]["posx"] += movementfactor * scalex;
      }
    }
    // Draws the object
    context.fillStyle = Objects[i]["color"];
    if (Objects[i]["type"] == "rect") {
      context.fillRect(Objects[i]["posx"], Objects[i]["posy"], Objects[i]["width"], Objects[i]["height"]);
    }
    else if (Objects[i]["type"] == "circ") {
      context.beginPath();
      context.arc(Objects[i]["posx"] + Objects[i]["width"] / 2, Objects[i]["posy"] + Objects[i]["height"] / 2, Objects[i]["width"] / 2, 0, 2 * Math.PI);
      context.stroke();
      context.fill();
    }

  }
}
// Checks for a collision
function collide(a, b) {
  at = a["posy"];
  ab = a["posy"] + a["height"];
  al = a["posx"];
  ar = a["posx"] + a["width"];
  bt = b["posy"];
  bb = b["posy"] + b["height"];
  bl = b["posx"];
  br = b["posx"] + b["width"];
  crashed = true;
  if ((ab < bt) ||
    (at > bb) ||
    (ar < bl) ||
    (al > br)) {
    crashed = false;
  }
  return crashed;
}

// Gives the player control over an object
function control(a) {
  jumped = 0;
  a["player"] = true;
  if (gravity) {
    document.onkeydown = function kd(key) {
      if (key.which == 87 || key.which == 38 && jumped == false) {
        jp = 0;
        if (jumped == 0){
          jumped = jumpcooldown;
          for (i = 0; i < 35; i++) {
          setTimeout(function jump() {
            jp += 1;
            if (a["posy"] >= 0) {
              a["posy"] -= (3 - (0.1 * jp)) * scaley;
            }
          }, 10 * slowmofactor * i);
        jp = 0;
        }
        } 
      }
      if (key.which == 65 || key.which == 37) {
        keyspressed["a"] = true;
      }
      if (key.which == 68 || key.which == 39) {
        keyspressed["d"] = true;
      }
    }
    document.onkeyup = function ku(key) {
      if (key.which == 65 || key.which == 37) {
        keyspressed["a"] = false;
      }
      if (key.which == 68 || key.which == 39) {
        keyspressed["d"] = false;
      }
    }
  }
  else {
    document.onkeydown = function kd(key) {
      if (key.which == 87 || key.which == 38) {
        keyspressed["w"] = true;
      }
      if (key.which == 65 || key.which == 37) {
        keyspressed["a"] = true;
      }
      if (key.which == 83 || key.which == 40) {
        keyspressed["s"] = true;
      }
      if (key.which == 68 || key.which == 39) {
        keyspressed["d"] = true;
      }
    }
    document.onkeyup = function ku(key) {
      if (key.which == 87 || key.which == 38) {
        keyspressed["w"] = false;
      }
      if (key.which == 65 || key.which == 37) {
        keyspressed["a"] = false;
      }
      if (key.which == 83 || key.which == 40) {
        keyspressed["s"] = false;
      }
      if (key.which == 68 || key.which == 39) {
        keyspressed["d"] = false;
      }
    }
  }
}
