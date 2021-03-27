class Plinko{

    constructor(x,y,r){
        var options={
            isStatic:true

          }
        
          this.body = Bodies.circle(x,y,r,options)
          World.add(world,this.body);
          this.r=r
         
    }
    display(){
        noStroke();
        fill(255);
        ellipseMode(CENTER);
        ellipse(this.body.position.x,this.body.position.y,this.r,this.r);
    }
}