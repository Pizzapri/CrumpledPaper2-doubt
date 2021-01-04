
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var left,right,bottom,center;
var paper;

function setup() {
	createCanvas(800, 400);


	engine = Engine.create();
	world = engine.world;

	ground=new Ground(400,380,800,10);

  paper=new Ball(200,370,30);

  fill("black")
  left=new Dustbin(550,340,10,70);
	right=new Dustbin(650,340,10,70);
  bottom=new Dustbin(600,370,95,10);
  center=new Dustbin(600,340,95,70);
  
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  ellipseMode(CENTER);
  background(255);

  ground.display();

  paper.display();

  left.display();
  right.display();
  center.display();
  bottom.display();


  drawSprites();
 
}



