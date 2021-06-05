var hr,mn,sc;
var hrAngle,mnAngle,scAngle;


function setup() {
  createCanvas(400,400);
  angleMode(DEGREES);

  
}

function draw() {
  background("black");  

  translate(200,200);
  rotate(-90);

  hr = hour()
  mn = minute();
  sc = second();

  hrAngle = map(hr%12,0,12,0,360)
  mnAngle = map(mn,0,60,0,360);
  scAngle = map(sc,0,60,0,360);

  // drawing second hand
  push();
  rotate(scAngle);
  stroke(255,0,0);
  strokeWeight(5);
  line(0,0,150,0)
  pop();

  push();
  rotate(mnAngle);
  stroke(0,0,255);
  strokeWeight(10);
  line(0,0,125,0);
  pop();

  push();
  rotate(hrAngle);
  stroke(0,255,0);
  strokeWeight(15)
  line(0,0,70,0);
  pop();

  noFill()
 
  strokeWeight(5);
  stroke(255,0,0);
  arc(0,0,325,325,0,scAngle)
  
  strokeWeight(10);
  stroke(0,0,255);
  arc(0,0,355,355,0,mnAngle)

  strokeWeight(15);
  stroke(0,255,0);
  arc(0,0,385,385,0,hrAngle)
  
  drawSprites();
}