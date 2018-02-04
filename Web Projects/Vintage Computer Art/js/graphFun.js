var canvas = document.getElementById('animationContainer');

var ox = window.innerWidth/2;
var oy = window.innerHeight/2;
var origin = createRect(ox, oy, 1, 1);
canvas.appendChild(origin);

var l = oy;
var x = ox * 2;
var y = oy;
var point = createRect(x, y, 1, 1);
//canvas.appendChild(point);

var d = 0;
var p = 1;
var points = [];
points[0] = createRect(x, y, 1, 1);
anim();


function anim() {
    
    //move the particle
    d += 1;
    d = d % 360;
    y = oy + l * Math.sin(degToRad(d))
    
    point.style.top = y + "px";
    
    var tempPoint = createRect(x, y, 1, 1);
    points.unshift(tempPoint);

    canvas.appendChild(tempPoint);
    
    console.log(points.length);
    
    for (var i = 0; i < points.length; i++) {
        points[i].style.left = parseInt(points[i].style.left, 10) - p + "px";
    }
    if (parseInt(points[points.length - 1].style.left) <= 0) {
        points.pop();
        canvas.removeChild(canvas.firstChild);
    }
    
    requestAnimationFrame(anim);
}
