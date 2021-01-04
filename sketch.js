
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var etc,dustbinImg;

function preload()
{
dustbinImg = loadImage("dustbingreen.png");	
}

function setup() {
	createCanvas(1000, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	paper0 = new Paper();

	
	
	ground = new Ground();

	b1 = new Dustbin(800,370,100,20);
	b2 = new Dustbin(770,280,20,100);
	b3 = new Dustbin(820,280,20,100);

	etc = createSprite(800,280,20,20);
	etc.addImage(dustbinImg);
	etc.scale = 0.60;


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);

  
  
  paper0.display();

  b1.display();
  b2.display();
  b3.display();  

  ground.display();

  keyPressed();
  drawSprites();
 
}

function keyPressed () {

	if (keyCode === UP_ARROW) {
	   
		Matter.Body.applyForce(paper0.body,paper0.body.position,{x:80,y:-20} );
		
	}
}



