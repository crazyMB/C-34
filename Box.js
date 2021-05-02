class Box {
  constructor(x, y){
  var options  = {

    'restitution':0.8,
    'friction':1.0,
    'density':0.04
  }

  this.body = Bodies.rectangle(x,y,70,70,options);
  this.width = 70;
  this.height = 70;
  World.add(world, this.body);
}

display(){
  var pos =this.body.position;
  var angle =this.body.angle;
  push();
  rectMode(CENTER);
  fill("black");
  strokeWeight(5);
  stroke("white");
  rect(pos.x,pos.y, this.width, this.height);
  pop();
}
};



