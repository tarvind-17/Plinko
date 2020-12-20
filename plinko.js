class Plinko {
    constructor(x,y) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.circle(x,y,10,options);
      this.color=rgb(random(0,255),random(0,255));
      
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      ellipseMode(RADIUS);
      this.color=rgb(random(0,255),random(0,255),random(0,255))
      fill(this.color);
      ellipse(pos.x, pos.y, 10,10);
    }
  };