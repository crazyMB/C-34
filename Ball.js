class Ball {
    constructor(x,y,width,height,angle) {
        var options = {
            
    'restitution':0.8,
    'friction':1.0,
    'density':0.04

        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;
        var angle =this.body.angle;
        push();
        rectMode(CENTER);
        fill("black");
        strokeWeight(5);
        stroke("black");
        ellipse(pos.x,pos.y, this.width, this.height);
         pop();
      }
    };