
function setup(){
  createCanvas(400,400);
  background(0, 300, 100);

}

function draw(){
  var myVar=map(mouseX,0,400,0,255);
  fill(myVar,10,65);
  stroke(myVar,56,180);
  strokeWeight(10)
  ellipse(mouseX, mouseY, 20, 20);


  console.log("drew circles");
}