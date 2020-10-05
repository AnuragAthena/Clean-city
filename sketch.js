var ground;
var paperBall;
var paperBody;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine, world;
var bottom, side1, side2;
// function preload()
// {
	
// }

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	// ground.shapeColor=color("white");
	// World.add(world, ground);
	
	

	// paperBody = Bodies.rectangle(50, 585 , 20 , 20, {restitution:0, isStatic:false, density:1.0});
	// World.add(world, paperBody);

	Engine.run(engine);
	ground = new Ground(400, 600, 800, 10);
	paperBall = new Paper(50, 450, 20);
	bottom = new Ground(650, 590, 10, 150);
	side1 = new Ground(570, 570, 50, 10);
	side2 = new Ground(730, 570, 50, 10);
}


function draw() {
//   rectMode(CENTER);
  background(0);
  ground.display(); 
  bottom.display(); 
  side1.display();
  side2.display();
  paperBall.display();
  Engine.update(engine);
  //   paperBall.x= paperBody.position.x 
//   paperBall.y= paperBody.position.y 
  keyPressed();
  
  
  drawSprites();
 }

 function keyPressed()
 {
	if(keyCode === UP_ARROW)
	{
		// Matter.Body.setStatic(paperBall.body, false);
		Matter.Body.applyForce(paperBall.body, paperBall.body.position, {x:85, y:-85});
	} 
 }



