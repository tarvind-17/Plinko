class Particle {
    constructor(x,y) {

        var options={
            restitution:0.5
        }
      this.body = Bodies.circle(x,y,10,options);
      this.color=rgb(random(0,255),random(0,255),random(0,255));
      
     
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      ellipseMode(RADIUS);
      fill(this.color);
      ellipse(pos.x, pos.y, 10,10);
    }
  };