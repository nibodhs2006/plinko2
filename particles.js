class Particle{

    constructor(x,y,r){
        var options={
            restitution:0.4

          }
        
          this.body = Bodies.circle(x,y,r,options)
          World.add(world,this.body);
          this.r=r
       this.color=color(random(0,255),random(0,255),random(0,255))
    }
    display(){
        noStroke();
        fill(this.color);
        ellipseMode(CENTER);
        ellipse(this.body.position.x,this.body.position.y,this.r,this.r);
    }
}