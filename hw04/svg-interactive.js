console.log("Javascript Loaded");
var pic = document.getElementById("vimage");
var intervalID;
var change = function(e) {
    e.preventDefault();
    this.setAttribute("fill", "green");
};

var drawDot = function(x, y) {
    var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
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
	drawDot(e.offsetX, e.offsetY);
    }
};

var grow = function(e) {
    //initialization statements
    var radius = 0;
    var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    var animateCode = function() {
	// Experiment by making multiple circles.
	c = document.getElementByTagName("circle")[0];
	//increment/decrementation of radius
	c.setAttribute("r", radius.toString());
	radius = parseInt(c.getAttribute("r"));
    }
    intervalID = window.setInterval(animateCode, 16);
}

var stop = function(e) {
    window.clearInterval(intervalID);
}

pic.addEventListener( "click", clicked);

