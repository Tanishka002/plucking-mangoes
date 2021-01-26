
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
 
function preload()
{
	
}

function setup() {
	createCanvas(925, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    ground = new Ground(600,height,1200,50);
    
    tree = new Tree(0,600,1,6)
    
    mango1 = new Mango (500,375,50);
    mango2 = new Mango (600,300,50);
    mango3 = new Mango (600,400,50);
    mango4 = new Mango (700,300,50);
    mango5 = new Mango (800,350,50);

stone = new Stone(50,567);

boy = new Boy(stone.body,{x:60,y:567});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  Engine.update(engine);
 ground.display(); 
 boy.display();
 tree.display();
 mango1.display();
 mango2.display();
 mango3.display();
 mango4.display();
 mango5.display();
 stone.display();

detectollision(stone,mango1)
detectollision(stone,mango2)
detectollision(stone,mango3)
detectollision(stone,mango4)
detectollision(stone,mango5)
drawSprites();
 
}


function mouseDragged(){
  Matter.Body.setPosition(stone.body, {x:mouseX , y: mouseY});
}

function mouseReleased(){
  boy.fly();
}
function keyPressed(){
  if(keyCode === 32){
      boy.attach(stone.body)
  }
  }

  function detectollision(lstone,lmango){
    mangoBodyPosition = lmango.body.position
    stoneBodyPosition = lstone.body.position
  var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
  if (distance<=lmango.r+lstone.r){
    Matter.Body.setStatic(lmango.body,false);
  }
  
  }