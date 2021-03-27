const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;




var world
var ground,divisions=[]
var divisionHeight=300
var score=0,particles=[]
var plinko=[]
function setup() {
  engine=Engine.create()
  world=engine.world
  createCanvas(480,800);
  
 ground = new Ground()

 for (var k = 0; k <=width; k = k + 80) { divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight)); }

 for (var k = 0; k <=width; k = k + 40) { plinko.push(new Plinko(k,75,10)); }

 for (var k = 10; k <=width; k = k + 40) { plinko.push(new Plinko(k,125,10)); }

 for (var k = 0; k <=width; k = k + 40) { plinko.push(new Plinko(k,175,10)); }

 for (var k = 10; k <=width; k = k + 40) { plinko.push(new Plinko(k,225,10)); }







}

function draw() {
  Engine.update(engine)
  background(0); 
  ground.display() 

  for (var k = 0; k < divisions.length; k++) { divisions[k].display(); }

  if(frameCount%60===0){ 
    particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
     score++;
   } 
   for (var j = 0; j < particles.length; j++) 
   { particles[j].display();
   }

   for (var i = 0; i < plinko.length; i++) { plinko[i].display(); }
text(score,20,50)
  drawSprites();
}