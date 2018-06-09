var mousePos,
    pos,
    target,
    vel,
    ctx,
    rad,
    drag,
    speed;

function setup() {
  ctx = createCanvas(windowWidth, windowHeight);  

  noStroke();
  background(16, 21, 30); 
  
  mousePos = createVector(0,0);
  pos = createVector(0,0);
  target = createVector(0,0);
  vel = createVector(0,0);
  
  drag = 0.76; //need to take some force away, 1 = no drag
  strength = 0.15; // the "strength" of the spring, out of 1
  
  r = 40; 
}

function draw() {
  // clear();
  background('rgba(16,0,0, 0.4)');  
    
  mousePos.set(mouseX, mouseY);
  target = mousePos;

  var force = p5.Vector.sub(target, pos);
  force = force.mult(strength);
  vel = vel.mult(drag);
  vel = vel.add(force);  
  pos = pos.add(vel);
  
  ellipse(pos.x, pos.y, r);
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}