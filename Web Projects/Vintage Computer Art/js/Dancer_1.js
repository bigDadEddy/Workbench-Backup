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
    c = 0; //variable to determine color
	cd = .05; //rate at which color changes
startAnim(anim, 100);

function anim() {
    //clear canvas
    while (canvas.firstChild) {
        canvas.removeChild(canvas.firstChild);
    }
    //change starting location of lines
    s += ds
    //s = s % 360;
	//change length of lines
	//l = ox + (1/4 * ox * Math.cos(degToRad(s * 3)));
    //change color of lines
	c += cd;
	//c = c % 100;	
	var r = Math.round(lerp(0, 100, Math.sin(.3 * c)/2 + 1));
	var g = Math.round(lerp(0, 155, Math.sin(.4 * c)/2 + 1));
	var b = Math.round(lerp(100, 255, Math.sin(.5 * c)/2 + 1));
	var color = "#" + (r).toString(16) + (g).toString(16) + (b).toString(16);
	//console.log(b);
	
    for (var i = s; i < 360 + s; i += n) {
		l = ox * 3 / 4 + ox * 1 / 4 * Math.cos(degToRad(.7 * i + s));
        x = ox + l * Math.cos(degToRad(2 * i)); 
        y = oy + l * Math.sin(degToRad(.7 * i));
        var line = createLine(ox, oy, x, y, color);		 
        canvas.appendChild(line);
    }

    
}
