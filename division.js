class Divisions{

    constructor(x,y,width,height){
        var options={
            isStatic : true
          }
        
          this.body = Bodies.rectangle(x,y,width,height,options)
          World.add(world,this.body);
          this.w=width
          this.h=height
    }
    display(){
        noStroke();
        fill(188,67,67);
        rectMode(CENTER);
        rect(this.body.position.x,this.body.position.y,this.w,this.h);
    }
}