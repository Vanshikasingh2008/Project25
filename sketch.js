var ground;
var crumbledPaper,dustbinPart1,dustbinPart2,dustbinPart3,paperObjectImg,dustbinImg;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

/*function preload(){
	paperObjectImg = loadImage("paper.png");
	dustbinImg = loadImage("dustbingreen.png");
}*/

function setup() {
	createCanvas(800, 500);


	engine = Engine.create();
	world = engine.world;

	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	//World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	fill("yellow");
 	World.add(world, ground);

	ground = createSprite(400,450,800,10);
	ground.shapeColor = "yellow";

	crumbledPaper = new Paper(100,435,15);
	dustbinPart1 = new Dustbin(600,435,15,200);
	dustbinPart2 = new Dustbin(500,385,100,15);
	dustbinPart3 = new Dustbin(700,385,100,15);

	keyPressed();

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  //imageMode(CENTER);
  //image(crumbledPaper.image,crumbledPaper.x,crumbledPaper.y,crumbledPaper.radius);

  crumbledPaper.display();
  dustbinPart1.display();
  dustbinPart2.display();
  dustbinPart3.display();
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){

	Matter.Body.applyForce(crumbledPaper.body,crumbledPaper.body.position,{x:85,y:-85});

	}
}



