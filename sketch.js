
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground,paperobj,bin,b1,b2,b3

function preload()
{
	
}

function setup() {
	createCanvas(1200, 500);


	engine = Engine.create();
  world = engine.world;
  ground= new Ground(600,480,1200,10)
  bin= new Dustbin(900,420,120,120)


  paperobj= new Paper(50,450,20,20)
 
  World.add(world,ground)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
  ground.display();
  paperobj.display();
  bin.display();





  drawSprites();
}
function keyPressed(){
  if (keyCode === UP_ARROW) {
    Matter.Body.applyForce(paperobj.body,paperobj.body.position,{x:24,y:-15});			
    }
}

  

