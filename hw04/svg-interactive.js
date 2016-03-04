console.log("Javascript Loaded");
var pic = document.getElementById("vimage");
var circleB = document.getElementById("circleB");
var dvdB = document.getElementById("dvdB");
var stopB = document.getElementById("stop");
var svgWidth = pic.getAttribute("width");
var svgHeight = pic.getAttribute("height");
var intervalID;
var requestID;


/*
var change = function(e) {
    e.preventDefault();
    this.setAttribute("fill", "green");
};

var drawDot = function(x, y) {
    var c = document.createElementNS("http://www.w3.g/2000/svg", "circle");
    c.setAttribute("cx", x);
    c.setAttribute("cy", y);
    c.setAttribute("r", "30");
    c.setAttribute("fill", "yellow");
    c.setAttribute("stroke", "black");
    c.addEventListener("click", change);
    pic.appendChild(c);
};


var clicked = function(e) {
    if (e.toElement == this) {
	grow();
    }
};
*/

var grow = function() {
    window.clearInterval(intervalID);
    while (pic.lastChild) {
	pic.removeChild(pic.lastChild);
    }
    //initialization statements
    var radius = 0;
    var growing = true;
    var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    c.setAttribute("cx", svgWidth/2);
    c.setAttribute("cy", svgHeight/2);
    c.setAttribute("fill", "red");
    c.setAttribute("stroke", "black");
    var animateCode = function() {
	// Experiment by making multiple circles.
	//c = document.getElementsByTagName("circle")[0];
	//increment/decrementation of radius
	c.setAttribute("r", radius.toString());
	radius = parseInt(c.getAttribute("r"));
	if ( growing ) {
            radius = radius + 1;
	}  
	else {
            radius = radius - 1;
	}
	if ( radius == (svgWidth / 2) )
            growing = false;
	else if ( radius == 0 ) {
            growing = true;
	}
	c.setAttribute("r", radius);
	pic.appendChild(c);
	
    }
    intervalID = window.setInterval(animateCode, 16);
}

var dvdAnimate = function(e) {
    window.clearInterval(intervalID);
    while (pic.lastChild) {
	pic.removeChild(pic.lastChild);
    }
    //var inits                             
    // Getting DVD Logo     
    var logoSrc="logo.jpg";
    //console.log(logo);
    // width and height of logo         
    var logoWidth = 80;
    var logoHeight = 40;
    // Current x and y coords of logo   
    var x = svgWidth/2;
    var y = svgHeight/2;
    // Change in x and change in y 
    var dx = 1;
    var dy = 1;
    var dvd = document.createElementNS("http://www.w3.org/2000/svg", "image");
    dvd.setAttribute("width", logoWidth);
    dvd.setAttribute("height", logoHeight);
    dvd.setAttribute("x", x);
    dvd.setAttribute("y", y);
    dvd.setAttributeNS("http://www.w3.org/1999/xlink", "href", logoSrc);
    var dvdAnimateCode = function() {
	dvd.setAttribute("x", x);
	dvd.setAttribute("y", y);
	pic.appendChild(dvd);
	if (x == 0 || x == svgWidth - logoWidth) {
            dx *= -1;
        } if (y == 0 || y == svgHeight - logoHeight) {
            dy *= -1;
        }
        // Increment x and y coords by dx and dy
        x += dx;
        y += dy;
    }
    intervalID = window.setInterval(dvdAnimateCode, 16);
} 

var stop = function(e) {
    window.clearInterval(intervalID);
}

//pic.addEventListener( "click", clicked);
circleB.addEventListener( "click", grow);
stopB.addEventListener("click", stop);
dvdB.addEventListener("click", dvdAnimate);
