var canvas = document.getElementById('animationContainer');

var ox = window.innerWidth/2;
var oy = window.innerHeight/2;

//var origin = createRect(ox, oy, 1, 1);
//canvas.appendChild(origin);

// VARIABLES TO ADJUST
var speed = 1;
var height = window.innerHeight/10;
var waveLength = window.innerWidth/20; //this variable needs work

var dDegrees = Math.max(1, 1);

var oy1 = window.innerHeight * 2 / 3;
var x1 = ox * 2;
var y1 = oy1;

var oy2 = window.innerHeight / 3;
var x2 = ox * 2;
var y2 = oy2;

var oy3 = window.innerHeight / 4;
var x3 = ox * 2;
var y3 = oy3;

var points = [];
points[0] = createRect(ox, oy, 1, 1); //primes the array

anim();

function anim() {
    
    //move the spawning particle
    dDegrees += 1;
    dDegrees = dDegrees % 360;
  
    y1 = oy1 + height * Math.sin(degToRad(dDegrees));
    
    var tempPoint1 = createRect(x1, y1, 1, 1);
    points.unshift(tempPoint1);
    canvas.appendChild(tempPoint1);
 // console.log(y1);  
  
    /*y2 = oy2 + height * Math.sin(degToRad(dDegrees));
    var tempPoint2 = createRect(x2, y2, 1, 1);
    points.unshift(tempPoint2);
    canvas.appendChild(tempPoint2);
    // console.log(y2);
    */
    /*y3 = oy3 + height * Math.sin(degToRad(dDegrees));
    var tempPoint3 = createRect(x3, y3, 1, 1);
    points.unshift(tempPoint3);
    canvas.appendChild(tempPoint3);
    //console.log(y3);
    //console.log(points.length);
    */
    for (var i = 0; i < points.length; i++) {
        points[i].style.left = parseInt(points[i].style.left, 10) - speed + "px";
    }
    if (parseInt(points[points.length - 1].style.left) <= 0) {
        points.pop();
        canvas.removeChild(canvas.firstChild);
    }
    
    requestAnimationFrame(anim);
}
