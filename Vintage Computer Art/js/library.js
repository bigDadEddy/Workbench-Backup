/*
Functions for intuitive drawing
*/
function createLineElement(x, y, length, angle, color) {
    var line = document.createElement("div");
    var styles = 'border: 1px solid black; '
               + 'background-color: ' + color + ';'
               + 'width: ' + length + 'px; '
               + 'height: 3px; '
               + '-moz-transform: rotate(' + angle + 'rad); '
               + '-webkit-transform: rotate(' + angle + 'rad); '
               + '-o-transform: rotate(' + angle + 'rad); '  
               + '-ms-transform: rotate(' + angle + 'rad); '  
               + 'position: absolute; '
               + 'top: ' + y + 'px; '
               + 'left: ' + x + 'px; ';
    line.setAttribute('style', styles);  
    return line;
}

function createLine(x1, y1, x2, y2, color) {
    var a = x1 - x2,
        b = y1 - y2,
        c = Math.sqrt(a * a + b * b);

    var sx = (x1 + x2) / 2,
        sy = (y1 + y2) / 2;

    var x = sx - c / 2,
        y = sy;

    var alpha = Math.PI - Math.atan2(-b, a);

    return createLineElement(x, y, c, alpha, color);
}

function createRect(x, y, width, height) {
    var rect = document.createElement("div");
    var styles = 'border: 1px solid black; '
               + 'background-color: white;'
               + 'width: ' + width + 'px; '
               + 'height: ' + height + 'px; '
               + 'position: absolute; '
               + 'top: ' + y + 'px; '
               + 'left: ' + x + 'px; ';
    rect.setAttribute('style', styles);
    return rect;
}

function rgbToHex(r, g, b) {
	return "#" + ((r).toString(16).length < 2 ? "0" + (r).toString(16) : (r).toString(16))
			   + ((g).toString(16).length < 2 ? "0" + (g).toString(16) : (g).toString(16))
			   + ((b).toString(16).length < 2 ? "0" + (b).toString(16) : (b).toString(16));
}
/*
handy math functions
*/
function degToRad(deg) {
    return deg / 180 * Math.PI;
}

function lerp(start, end, alpha) {
	alpha = alpha < 0 ? 0 : alpha;
	alpha = alpha > 1 ? 1 : alpha;
	return start + (end - start) * alpha;
}

/*controls how often the animation method updates
 * @pre 1 <= speed <= 100, 100 is full speed 
 * always initialize counter to 1
*/
function animController(func, speed, counter) {
	gapBetweenUpdates = Math.floor(100.0 / speed);
	if (counter % gapBetweenUpdates == 0) {
		func();	
	}
	requestAnimationFrame(function() { animController(func, speed, (counter%100)+1) });
}
//animController helper method
function startAnim(func, speed) {
	animController(func, speed, 1);
}
