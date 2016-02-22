/* ------------------------ JAVASCRIPT ------------------- */

console.log("JavaScript loaded!@@!");

// Gets the Canvas by the id of ftb2maga
var c = document.getElementById("ftb2maga");
// Gets the 2d context of the canvas in variable c
var ctx = c.getContext("2d");

// Determines color for canvas drawing, in this case, blue
ctx.fillStyle="#0000FF";
// Draws the filled in rectangle starting from (300,300) with dimensions 100x100
ctx.fillRect(300,300,100,100);

// Determines color for canvas drawing, in this case, green
ctx.strokeStyle="#00FF00";
// Draws the outlined rectangle starting from (200,200) with dimensions 100x100
ctx.strokeRect(200,200,100,100);

// Starts the drawing path
ctx.beginPath();
// Moves the position of the "pen" on the canvas to (x,y)
ctx.moveTo(150,150);
// Makes a line to (x,y), but it does NOT actually draw it yet
ctx.lineTo(20,200);
// Ends the "drawing" session
ctx.closePath();
// Outlines object drawn in color specified in strokeStyle
ctx.stroke();
// Fills in object drawn with color specified in fillStyle
ctx.fill();

ctx.beginPath();
// Creates an arc at (100,100) with a radius of 50 from 0 to 3 radians
// .arc(x,y,radius,starting angle,ending angle)
// Angles are in radians
ctx.arc(100,100,50,0,3);
ctx.closePath();
// Fills in area between chord and arc
ctx.fill();

ctx.beginPath();
ctx.arc(300,300,50,0,3);
ctx.closePath();
// Outlines area between chord and arc
ctx.stroke();

// Sets the font size and style for text
ctx.font="30px arial";

// Puts "Hello World!" at coordinates 0, 30
ctx.fillText("Hello World!",0,30);
