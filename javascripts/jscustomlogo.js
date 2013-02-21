
window.onload = function() {
	
	var canvas=document.getElementById("canvas"); // grabs the canvas element
	var context=canvas.getContext("2d"); // returns the 2d context object
	

	var W = window.innerWidth;
	var H = window.innerHeight;
	canvas.width = W;
	canvas.height = H;



var img=new Image() //creates a variable for a new image
 
img.src= "http://www.patagoniclabs.com/logo.png" // specifies the location of the image
context.drawImage(img,H/2,W/2); // draws the image at the specified x and y location

	

}
