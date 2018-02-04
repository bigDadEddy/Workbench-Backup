var canvas = document.getElementById('sketch');
var width = canvas.width = window.innerWidth;
var height = canvas.height = window.innerHeight;
var ctx = canvas.getContext('2d');
//background
ctx.fillStyle = 'rgb(0, 0, 0)';
ctx.fillRect(0, 0, width, height);
//helpfull functions
function degToRad(degrees) {
    return degrees * Math.PI / 180;
}
//drawing type shit
function drawLine(startx, starty, endx, endy, color, weight) {
    var x1,x2,x3,x4,y1,y2,y3,y4;
    var slope = (endy-starty) / (endx-endy);
    var aSlope = -1 / slope;
    
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.lineTo(x3, y3);
    ctx.lineTo(x4, y4);
    ctx.lineTo(x1, y1);
    ctx.fill();
}

//origin
var ox = width / 2;
var oy = height / 2;

function drawLinePolar(deg, length, color) {
    drawLine(ox, oy, ox+Math.cos(degToRad(deg))*length, oy+Math.sin(degToRad(deg))*length, color, 2);
}
for(var i=0; i < 360; i += 15) {
    if(i%2 == 0) {
        drawLinePolar(i, 500, 'rgb(0,0,255)'); 
    } else {
        drawLinePolar(i, 500, 'rgb(255,0,0)');
    }
}



