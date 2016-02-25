//model for HTML5 canvas-based animation

//access canvas and buttons via DOM
var c = document.getElementById("playground");
var dotButton = document.getElementById( "circle" );
var dvdButton = document.getElementById( "dvd" );
var stopButton = document.getElementById( "stop" );

//prepare to interact with canvas in 2D
var ctx = c.getContext("2d");

//set fill color to red
ctx.fillStyle = "#ff0000";


var requestID;

var clear = function(e) {
    e.preventDefault();
    ctx.clearRect(0, 0, 500, 500);
};

var radius = 0;
var growing = true;


var drawDot = function() {
    
    ctx.clearRect( 0, 0, c.width, c.height );

    if ( growing ) {
	radius = radius + 1;
    }    
    else {
	radius = radius - 1;
    }

    if ( radius == (c.width / 2) )
	growing = false;
    else if ( radius == 0 ) {
	growing = true;
    }
    
    ctx.beginPath();
    ctx.arc( c.width / 2, c.height / 2, radius, 0, 2 * Math.PI );
    ctx.stroke();
    ctx.fill();

    requestID = window.requestAnimationFrame( drawDot );
};



var dvdLogoSetup = function() {
    
    //Q: What good might this do?
    // Prevents dvdLogo function from running multiple times without
    // stopping the animation. Logo will never speed up.
    window.cancelAnimationFrame( requestID );
   
    //var inits
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
    


    //a function defined within a function, oh my!
    var dvdLogo = function() {
	
	//propulsion mechanism
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


	//Q: Why this here?
	// Request ID is necessary in order to stop the dvd when the
	// stop button is pressed or to stop the animation when the 
	// dvd button is pressed before starting over.
	requestID = window.requestAnimationFrame( dvdLogo );		
    };

    dvdLogo();
};


var stopIt = function() {
    console.log( requestID );
    window.cancelAnimationFrame( requestID );
};


dotButton.addEventListener( "click", drawDot );
dvdButton.addEventListener( "click", dvdLogoSetup );
stopButton.addEventListener( "click",  stopIt );

