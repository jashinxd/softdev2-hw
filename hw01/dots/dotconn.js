/*------------------------JAVSCTIPT-------------------*/
console.log("Javascript loaded");
var c = document.getElementById("playground");
var b = document.getElementById("clear");
var ctx = c.getContext("2d");
// Keeps track of previous point plotted
var prevX = 0;
var prevY = 0;

// Funtion to create a line from previous point to new point
function makeline(x, y) {
    if (prevX != 0) {
	ctx.fillStyle = "#000000";
	ctx.beginPath();
	ctx.moveTo(prevX, prevY);
	ctx.lineTo(x, y);
	ctx.closePath();
	ctx.stroke();
    }
}

// Function that creats a dot on the canvas
var makeDot = function(e) {
    e.preventDefault();
    var x = e.offsetX;
    var y = e.offsetY;
    ctx.fillStyle="#0000FF";
    ctx.beginPath();
    ctx.arc(x, y, 10, 0, 6.29);
    ctx.closePath();
    ctx.fill();
    makeline(x, y)
    // After making line, sets (x, y) to prevX, prevY
    prevX = x;
    prevY = y;
}

// Clears the canvas
var clear = function(e) {
    e.preventDefault();
    ctx.clearRect(0, 0, c.width, c.height);
}

// Adds events to canvas and button
c.addEventListener('click', makeDot);
b.addEventListener('click', clear);
