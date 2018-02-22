
function setup(){
  createCanvas(400,400);
  background(0, 300, 100);

}

function draw(){
  // mouseX : changes based on the X position of the mouse
  // map : numerical variable to listen to, min value, max value, min output, max output)
  // myVar : always changing value
  var myVar=map(mouseX,0,400,0,255);
  console.log(myVar)
   // fill and stroke use myVar as the red element of their RGB definition
  fill(myVar,10,65);
  stroke(myVar,56,180);
  strokeWeight(10)
  ellipse(mouseX, mouseY, 20, 20);


  console.log("drew circles");
}
