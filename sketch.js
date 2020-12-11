
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	
	roofObject = new Roof(400,100,1000,20)
	bobObject1 = new Bob(200,300,50,50)
	bobObject2 = new Bob(300,300,50,50)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  roofObject.display();
  bobObject1.display();
  bobObject2.display();
  
  drawSprites();
 
}



