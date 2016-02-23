/*------------------------JAVSCTIPT-------------------*/
console.log("Javascript loaded");
// Get the canvas
var c = document.getElementById("playground");
// Button to clear the screen
var b = document.getElementById("clear");
// Get 2d canvas
var ctx = c.getContext("2d");

ctx.fillStyle="#0000FF";

var radius = 0;
var growing = true;

// Draws the circle
var circle = function(e) {
    e.preventDefault();
    ctx.clearRect(0, 0, c.width, c.height);
    if (growing) {
	radius = radius + 1;
    } else {
	radius = radius - 1;
    }
    if (radius < c.width/2 || radius == 0) {
	growing = !growing;
    }
    window.requestAnimationFrame(circle);
};

// Clears the canvas
var clear = function(e) {
    e.preventDefault();
    ctx.clearRect(0, 0, c.width, c.height);
    // When cleared, makes prevX and prevY 0.
    prevX = 0;
    prevY = 0;
}

// Adds events to canvas and button
b.addEventListener('click', circle);
b.addEventListener('click', clear);
