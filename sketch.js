
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
 
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    ground = new Ground(600,height,1200,20);
    tree = new Tree(0,600,1,6)
    stone = new Stone(100,100);
    boy = new Boy(stone.body,{x:200,y:600});
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  tree.display();
  stone.display();
  boy.display();
  ground.display();
  drawSprites();
 
}



