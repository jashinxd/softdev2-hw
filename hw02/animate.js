/*------------------------JAVSCTIPT-------------------*/
console.log("Javascript loaded");
// Get the canvas
var c = document.getElementById("playground");
// Button to start the animation
var circleB = document.getElementById("circle");
// Get 2d canvas
var ctx = c.getContext("2d");

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
    window.requestAnimationFrame(circle);
};

// Adds events to circle button.
circleB.addEventListener('click', circle);
