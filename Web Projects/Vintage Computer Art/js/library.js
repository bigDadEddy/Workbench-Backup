function createLineElement(x, y, length, angle) {
    var line = document.createElement("div");
    var styles = 'border: 1px solid black; '
               + 'background-color: white;'
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

function createLine(x1, y1, x2, y2) {
    var a = x1 - x2,
        b = y1 - y2,
        c = Math.sqrt(a * a + b * b);

    var sx = (x1 + x2) / 2,
        sy = (y1 + y2) / 2;

    var x = sx - c / 2,
        y = sy;

    var alpha = Math.PI - Math.atan2(-b, a);

    return createLineElement(x, y, c, alpha);
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

function degToRad(deg) {
    return deg / 180 * Math.PI;
}

/*class Point{
  constructor(x, y){
    this.x = x;
    this.y = y;
    this.p = createRect(x, y, 2, 2);
  }
  
  get x() {
    return this.x;
  }
  
  get y() {
    return this.y;
  }
  
  set x(newX) {
    this.x = newX;
    this.p.style.left = newX + 'px';
  }
  
  set y(newY) {
    this.y = newY;
    this.p.style.top = newY + 'px';
  }
  
  draw(canvas) {
    canvas.appendChild(p);
  }
}*/