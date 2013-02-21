window.onload = function() {




	var W = window.innerWidth;
	var H = window.innerHeight;
	canvas.canvas2.width = W;
	canvas.canvas2.height = H;


var canvas.canvas2=document.getElementById("logo"); // grabs the canvas element
var context=canvas.canvas2.getContext("2d"); // returns the 2d context object
var img=new Image() //creates a variable for a new image
img.src= "http://www.patagoniclabs.com/logo.png" // specifies the location of the image
context.drawImage(img,H/2,W/2); // draws the image at the specified x and y location
}