//Coconut Engine
var Objects = [];
var canvas;
var context;
var ticker;
var scalefactor;

// Settings
var slowmofactor = 1;
var disableclear = false;

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
	addactor(10, 10, 10, 10, "#000000");
	addactor(0, canvasy - (10), canvasx, 10, "#000000");
	ticker = setInterval(ontick, 10 * slowmofactor);
}

function addactor(posx, posy, width, height, color = "#ffffff", text = NaN) {
	posx = posx * scalex
	posy = posy * scaley
	width = width * scalex
	height = height * scaley
	Objects.push({
		posx,
		posy,
		width,
		height,
		color,
		text
	});
}

function ontick() {
	if (disableclear == false) {
		context.fillStyle = "#ffffff";
		context.fillRect(0, 0, canvasx * scalex, canvasy * scaley);
	}
	for (i = 0; i < Objects.length; i++) {
		crashed = false;
		for (d = 0; d < Objects.length; d++) {
			if (collide(Objects[i], Objects[d])) {
				crashed = true;
			}
		}
		if (Objects[i]["posy"] + Objects[i]["height"] <= canvas.height && crashed == false) {
			Objects[i]["posy"] += 1 * scaley;
		}
		context.fillStyle = Objects[i]["color"];
		context.fillRect(Objects[i]["posx"], Objects[i]["posy"], Objects[i]["width"], Objects[i]["height"]);
	}
}

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