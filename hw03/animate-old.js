/*------------------------JAVSCTIPT-------------------*/
console.log("Javascript loaded");
// Get the canvas
var c = document.getElementById("playground");
// Button to start the circle animation
var circleB = document.getElementById("circle");
// Button to start the logo animation
var logoB = document.getElementById("logo");
// Button to stop the animation
var stopB = document.getElementById("stop");
// Get 2d canvas
var ctx = c.getContext("2d");
// Request ID for animation
var requestID;

// Getting DVD Logo
var logo = new Image();
logo.src="logo.jpg";
console.log(logo);
// width and height of logo
var logoWidth = 80;
var logoHeight = 40;

// Current x and y coords of logo
var x = c.width/2;
var y = c.height/2;
// Change in x and change in y
var dx = 1;
var dy = 1;

ctx.fillStyle="#0000FF";

// Radius of circle and state of circle growth
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

var animateLogo = function(e) {
    // Clears the canvas
    ctx.clearRect(0, 0, c.width, c.height);
    // Draws image with upper left corner at center of canvas
    ctx.drawImage(logo, x, y, logoWidth, logoHeight);
    // Change direction of movement when logo hits edge of canvas
    if (x == 0 || x == c.width - logoWidth) {
	dx *= -1;
    } if (y == 0 || y == c.height - logoHeight) {
	dy *= -1;
    }
    // Increment x and y coords by dx and dy
    x += dx;
    y += dy;
    // Repeat the process
    requestID = window.requestAnimationFrame(animateLogo);
};    

// Function to stop any animation on screen
var stop = function(e) {
    requestID = window.cancelAnimationFrame(requestID);
};

// Adds events to buttons.
circleB.addEventListener('click', circle);
logoB.addEventListener('click', animateLogo);
stopB.addEventListener('click', stop);
