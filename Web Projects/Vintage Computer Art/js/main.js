var canvas = document.getElementById('animationContainer');

//origin in center of container
var ox = window.innerWidth/2;
var oy = window.innerHeight/2;

var l = ox * 3 / 4; //length of bars
    n = 360 / 72; //distance between bars
    x = ox + l * Math.cos(degToRad(45)); //end points of line
    y = oy + l * Math.sin(degToRad(45)); //
    s = 0; //starting offset of where lines are drawn
    ds = .8; //rate at which the offset changes
    c = 0; //variable to seed color
	cd = .05; //rate at which color changes
	startAnim(anim, 100);
	console.log(rgbToHex(255,10,69));
    noise.seed(Math.random());

function anim() {
    //clear canvas
    while (canvas.firstChild) {
        canvas.removeChild(canvas.firstChild);
    }
    
    //change starting location of lines
    s += ds
    s = s % 360;
	//change length of lines
	//l = ox + (1/4 * ox * Math.cos(degToRad(s * 3)));
    //change color of lines
	//c += cd;
	//c = c % 100;	
	var //r = Math.round(lerp(0, 100, Math.sin(1 * c)/2 + 1));
	    //g = Math.round(lerp(0, 155, Math.sin(1 * c)/2 + 1));
	    //b = Math.round(lerp(0, 255, Math.sin(1 * c)/2 + 1));
	    color = rgbToHex(200, 200, 200);
	    colorR = rgbToHex(255, 0, 0);
	    colorB = rgbToHex(0, 0, 255);

	
    for (var i = s; i < 360 + s; i += n) {
        var value = noise.simplex2(s, i);
		l = ox + ;
        x = ox + l * Math.cos(degToRad(1 * i)); 
        y = oy + l * Math.sin(degToRad(1 * i));
        //var temp = rgbToHex(0, 0, 0);
        var line = createLine(ox, oy, x, y, color);		 
        canvas.appendChild(line);
    }

    
}
