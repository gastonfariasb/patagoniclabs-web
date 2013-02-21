window.onload = function() {
var canvas=document.getElementById("canvas_logo"); // grabs the canvas element
var context=canvas.getContext("2d"); // returns the 2d context object
var img=new Image() //creates a variable for a new image
 
img.src= "logo.png" // specifies the location of the image
context.drawImage(img,0,0); // draws the image at the specified x and y location
}