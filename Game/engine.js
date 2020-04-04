// Coconut Engine V 1.2.5
// Created By Lynn Ong

var Objects = [];
var keyspressed = [];
var functionlist = [];
var canvas;
var context;
var screenx;
var screeny;
var scaley;
var canvasx;
var canvasy;
var scalex;
var scaley;
var ticker;
var scalefactor;
var jumpedcool;
var jumped;
var backgroundimage;
var removeall;

// Settings
var slowmofactor = 1;
var movementfactor;
var disableclear = false;
var gravity = true;
var gravityfacor;
var jumpcooldown;

// Set up the engine
function init(maincanvas) {
  canvas = maincanvas;
  screenx = 1440;
  screeny = 900;
  canvasx = screenx / 1.5;
  canvasy = screeny / 1.5;
  canvas.width = canvasx;
  canvas.height = canvasy;
  canvas.style.width = (screen.width).toString() + "px";
  canvas.style.height = (screen.height).toString() + "px";
  context = canvas.getContext("2d");
  ticker = setInterval(ontick, 10 * slowmofactor);
  ontick();
}

// Adds an instance to the Objects list
function addobject(posx, posy, width, height, color = "#000000", type = "rect", followsgravity = true, source = NaN, solid = true) {
  posx = posx;
  posy = posy;
  width = width;
  height = height;
  isplayer = false;
  removeinticks = 500;
  points = 0;
  clearable = true;
  Objects.push({
    posx,
    posy,
    width,
    height,
    color,
    type,
    followsgravity,
    source,
    solid,
    isplayer,
    removeinticks,
    points,
    clearable,
  });
  return Objects[Objects.length - 1];
}

// Does this every tick (10 ms)
function ontick() {
  // Checks if objects should be removed
  if (removeall){
    for (f = 0; f < Objects.length; f++){
      if (Objects[f]["clearable"]){
        delete Objects[f]
      }
      else{
        Objects[f]["posx"] = 0;
        Objects[f]["posy"] = (canvasy - 40);
      }
    }
    Objects = Objects.filter(g => Object.keys(g).length !== 0);
    removeall = false;
  }

  //Clears the screen
  if (disableclear == false) {
    context.clearRect(0, 0, canvasx, canvasy);
  }
  // Sets the background image
  if (backgroundimage != "") {
    img = new Image(screenx, screeny);
    img.src = backgroundimage;
    context.drawImage(img, 0, 0, screenx, screeny);
  }
  // Cools down jump
  if (jumpedcool > 0) {
    jumpedcool -= 1;
  }
  // Repeats with every object
  for (i = 0; i < Objects.length; i++) {
    // Checks for collisions
    collisionlog = [];
    for (d = 0; d < Objects.length; d++) {
      if (typeof Objects[d] !== "undefined" ){
        if (d != i && Objects[d]["solid"]) {
          collide(Objects[i], Objects[d], collisionlog);
        }
      }
    }
    // Adds a gravitational pull to the object
    if (Objects[i]["posy"] + Objects[i]["height"] <= canvas.height && collisionlog["b"] != true && gravity == true && Objects[i]["followsgravity"] == true) {
      Objects[i]["posy"] += gravityfacor;
    }
    // Moves the controlled object
    if (Objects[i]["isplayer"]) {
      if (keyspressed["w"] && Objects[i]["posy"] - movementfactor >= 0 && collisionlog["t"] != true) {
        Objects[i]["posy"] -= movementfactor;
      }
      if (keyspressed["a"] && Objects[i]["posx"] - movementfactor >= 0 && collisionlog["l"] != true) {
        Objects[i]["posx"] -= movementfactor;
      }
      if (keyspressed["s"] && Objects[i]["posy"] + Objects[i]["height"] + movementfactor <= screeny && collisionlog["b"] != true) {
        Objects[i]["posy"] += movementfactor;
      }
      if (keyspressed["d"] && Objects[i]["posx"] + Objects[i]["width"] + movementfactor <= screenx && collisionlog["r"] != true) {
        Objects[i]["posx"] += movementfactor;
      }
    }
    // Draws the object
    context.fillStyle = Objects[i]["color"];
    if (Objects[i]["type"] == "rect") {
      context.fillRect(Objects[i]["posx"], Objects[i]["posy"], Objects[i]["width"], Objects[i]["height"]);
    } else if (Objects[i]["type"] == "circ") {
      context.beginPath();
      context.arc(Objects[i]["posx"] + Objects[i]["width"] / 2, Objects[i]["posy"] + Objects[i]["height"] / 2, Objects[i]["width"] / 2, 0, 2 * Math.PI);
      context.stroke();
      context.fill();
    } else if (Objects[i]["type"] == "text") {
      if (Number.isInteger(Objects[i]["height"]) || Objects[i]["height"] == NaN) {
        Objects[i]["height"] = "serif";
      }
      context.font = (Objects[i]["width"]).toString() + "px " + Objects[i]["height"].toString();
      context.fillText(Objects[i]["source"], Objects[i]["posx"], Objects[i]["posy"]);
    } else if (Objects[i]["type"] == "imag") {
      img = new Image(Objects[i]["width"], Objects[i]["height"])
      img.src = Objects[i]["source"];
      context.drawImage(img, Objects[i]["posx"], Objects[i]["posy"], Objects[i]["width"], Objects[i]["height"]);
    }
  }
  // Does all added functions
  for (i = 0; i < functionlist.length; i++) {
    functionlist[i]()
  }
}

// Checks for a collision
function collide(a, b, collisionlist) {
  if (typeof a !== "undefined" ){
    at = a["posy"];
    ab = a["posy"] + a["height"];
    al = a["posx"];
    ar = a["posx"] + a["width"];
    bt = b["posy"];
    bb = b["posy"] + b["height"];
    bl = b["posx"];
    br = b["posx"] + b["width"];
    if (ab > bt - 2 && al < br && ar > bl && at < bt){
      if (a["key"]){
        a["touched"] = b
      }
      collisionlist["b"] = true;
    }
    if  (at - 2 < bb && al < br && ar > bl && ab > bb){
      if (a["key"]){
        a["touched"] = b
      }
      collisionlist["t"] = true;
    } 
    if  (ar > bl - 2 && at < bb && ab > bt && al < bl){
      if (a["key"]){
        a["touched"] = b
      }
      collisionlist["r"] = true;
    }
    if  (al - 2 < br && at < bb && ab > bt && ar > br){
      if (a["key"]){
        a["touched"] = b
      }
      collisionlist["l"] = true;
    }
  }
}

// Changes the background
function changecanvas(color, image = "") {
  if (image == "") {
    canvas.style.background = color;
    backgroundimage = "";
  } else {
    backgroundimage = image;
  }
}

// Adds to a list of functions to perform per tick
function ticklist(functionname, task = "add") {
  if (task = "add") {
    functionlist.push(functionname);
  } else if (task = "remove") {
    functionlist.pop(functionname);
  }
}

// Gives the player control over an object
function control(a, u = 'Player') {
  jumpedcool = 0;
  jumped = false;
  a["isplayer"] = true;
  a["clearable"] = false;
  a["username"] = u;
  if (gravity) {
    document.onkeydown = function kd(key) {
      if (key.which == 32) {
        keyspressed[" "] = true;
      }
      if (key.which == 87 || key.which == 38 && jumpedcool < jumpedcooldown * 2 && jumped == false) {
        jp = 20;
        if (jumpedcool < jumpcooldown * 2 && jumped == false) {
          jumpedcool += jumpcooldown;
          jumped = true;
          for (i = 0; i < 30; i++) {
            setTimeout(function jump() {
              jp -= 1;
              collisionlog = [];
              for (d = 0; d < Objects.length; d++) {
                if (typeof Objects[d] !== "undefined" ){
                  if (d != a && Objects[d]["solid"]){
                    collide(a, Objects[d], collisionlog);
                  }
                }
              }
              if (a["posy"] >= 0 && collisionlog["t"] != true) {
                a["posy"] -= (4 + (0.2 * jp));
              }
            }, 10 * slowmofactor * i);
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
      if (key.which == 87 || key.which == 38) {
        keyspressed[" "] = false;
      }
      if (key.which == 87 || key.which == 38) {
        jumped = false;
      }
      if (key.which == 65 || key.which == 37) {
        keyspressed["a"] = false;
      }
      if (key.which == 68 || key.which == 39) {
        keyspressed["d"] = false;
      }
    }
  } else {
    document.onkeydown = function kd(key) {
      if (key.which == 32) {
        keyspressed[" "] = true;
      }
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
      if (key.which == 32) {
        keyspressed[" "] = true;
      }
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

// Set's the target object
function target(a){
  a["key"] = true;
  a["followsgravity"] = false;
  a["type"] = "rect";
  a["color"] = "#2020a0";
}

// Change settings
function set_settings(jcd = 60, mf = 2, gf = 2){
  jumpcooldown = jcd;
  movementfactor = mf;
  gravityfacor = gf;
}