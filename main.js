var canvas = document.getElementById('animationContainer');

var ox = window.innerWidth/2;
var oy = window.innerHeight/2;
//var origin = createRect(ox, oy, 1, 1);
//canvas.appendChild(origin);

var l = ox;
var x = ox + l * Math.cos(degToRad(45));
var y = oy + l * Math.sin(degToRad(45));
var point = createRect(x, y, 1, 1);
var d = 1;
var s = 0;
anim();

/*for (var i = 0; i < 360; i += 5) {
    x = ox + l * Math.cos(degToRad(i)); 
    y = 500;
    point = createLine(ox, oy, x, y);
    canvas.appendChild(point);
}**/
function anim() {
    //clear canvas
    while (canvas.firstChild) {
        canvas.removeChild(canvas.firstChild);
    }
    
    s += d
    s = s % 360;
    console.log(s);
    
    for (var i = s; i < 360 + s; i += 15) {
        x = 0; 
        y = oy + l * Math.sin(degToRad(i));
        point = createLine(ox, oy, x, y);
        canvas.appendChild(point);
    }

    requestAnimationFrame(anim);
}
