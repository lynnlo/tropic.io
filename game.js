//Coconut Engine
var Objects = [];
var canvas;
var context;
var ticker;
var scalefactor;

// Settings
var slowmofactor = 1;
var disableclear = false;

function onload(){
	scalefactorwidth = screen.width / 100
	scalefactorheight = screen.height / 100
	canvas = document.getElementById("maincanvas");
	canvas.width  = 200 * scalefactorwidth
	canvas.height = 200 * scalefactorheight
	canvas.style.width = (100 * scalefactorwidth).toString()+"px";
	canvas.style.height = (100 * scalefactorheight).toString()+"px";
	context = canvas.getContext("2d");
	addactor(10,10,9,16,"#000000");
	ticker = setInterval(ontick, 10 * slowmofactor);
}

function addactor(posx, posy, width, height, color = "#ffffff", text = NaN){
	posx = posx * scalefactorwidth;
	posy = posy * scalefactorheight;
	width = width * scalefactorwidth;
	height = height * scalefactorheight;
	Objects.push({posx, posy, width, height, color, text});
}

function ontick(){
	if (disableclear == false){
			context.fillStyle = "#ffffff"
			context.fillRect(0, 0, 200 * scalefactorwidth, 200 * scalefactorheight)
	}
	for (i = 0; i < Objects.length; i++){
		Objects[i]["posy"] += 1 * scalefactorheight
		context.fillStyle = Objects[i]["color"]
		context.fillRect(Objects[i]["posx"],Objects[i]["posy"],Objects[i]["width"],Objects[i]["height"])
	}

}
