/*------------------------JAVSCTIPT-------------------*/
console.log("Javascript loaded");
// Get the canvas
var c = document.getElementById("playground");
// Button to start the circle animation
var circleB = document.getElementById("circle");
// Button to start the logo animation
var logo = document.getElementById("logo");
// Button to stop the animation
var stopB = document.getElementById("stop");
// Get 2d canvas
var ctx = c.getContext("2d");
// Request ID for animation
var requestID;

// Getting DVD Logo
var logo = newImage();
logo.src="logo.jpg";
// width and height of logo
var logoWidth = logo.clientWidth;
var logoHeight = logo.clientHeight;
// Current x and y coords of logo
var x = 
// Change in x and change in y
var dx = 1;
var dy = 1;

ctx.fillStyle="#0000FF";

var radius = 0;
var growing = true;

var makeCircle = function() {
    ctx.beginPath();
    // Make circle at center of canvas, with radius "radius"
    ctx.arc(c.width/2, c.height/2, radius, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.fill();
};

// Draws the circle
var circle = function(e) {
    // Function works wihout e.preventDefault(), I think
    // window.requestAnimationFrame(circle) is causing the error.
    //e.preventDefault();
    ctx.clearRect(0, 0, c.width, c.height);
    // If state "growing" is true, increases the radius by 1, else 
    // decrease by 1.
    if (growing) {
	radius = radius + 1;
    } else {
	radius = radius - 1;
    }
    // Draw new circle
    makeCircle();
    // Change state "growing" if circle has no radius or if circle
    // reaches borders.
    if (radius >= c.width/2 || radius == 0) {
	growing = !growing;
    }
    // Repeat the process.
    requestID = window.requestAnimationFrame(circle);
};

var drawLogo = function() {
    ctx.drawImage(logo, x, y, logoWidth, logoheight);
}

var logo = function(e) {
    ctx.clearRect(0, 0, c.width, c.height);
    drawLogo();
    if (x == 0 || x == c.width - logoWidth) {
	dx *= 1;
    } else if (y == 0 || y == c.height - logoHeigth) {
	dx *= 1;
    }
    x += dx
    y += dy
    requestID = window.requestAnimationFrame(logo);
}    

var stop = function(e) {
    requestID = window.cancelAnimationFrame(requestID);
}

// Adds events to circle button.
circleB.addEventListener('click', circle);
logo.addEventListener('click', logo);
stopB.addEventListener('click', stop);
