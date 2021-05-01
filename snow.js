class Snow {
    constructor(x, y,radius) {
      var options = {
          'restitution':0.8,
          'friction':1.0,
          'density':1.0
      }
      this.img=loadImage("snow4.webp")
      this.body = Bodies.circle(x, y,radius, options);
      this.radius=radius
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
     imageMode(CENTER);
      fill("green");
      image(this.img,0, 0,this.radius,this.radius);
      pop();
    }
  };
  