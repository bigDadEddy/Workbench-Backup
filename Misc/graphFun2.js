var canvas = document.getElementById('animationContainer');

//creates a center of the window to center stuff around
var ox = Math.floor(window.innerWidth/2);
var oy = Math.floor(window.innerHeight/2);
//var origin = createRect(ox, oy, 1, 1);
//canvas.appendChild(origin);

var l = Math.floor(oy/ 10 * 7); //height of graph
var x = ox * 2; 
var y = oy;

var d = 0; //current degrees
var p = 2; //speed at which graph particles move to the left
var points = [];
points[0] = createRect(x, y, 1, 1); //primes array
animController();

var counter = 0;

function anim() {
    
    //move the particle
    d += 1;
    d = d % 360;
    y = oy + l * Math.sin(degToRad(d))
    
    
    var tempPoint = createRect(x, y, 2, 2);
    points.unshift(tempPoint);

    canvas.appendChild(tempPoint);
    
    console.log(points[0].style.top);
    
    for (var i = 0; i < points.length; i++) {
        points[i].style.left = parseInt(points[i].style.left, 10) - p + "px";
    }
    if (parseInt(points[points.length - 1].style.left) <= 0) {
        points.pop();
        canvas.removeChild(canvas.firstChild);
    }
}

function animController() {
	counter++;
	if (counter % 1 == 0) {
		anim();
	}
	requestAnimationFrame(animController);
}