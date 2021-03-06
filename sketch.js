
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground;
var roof;
var bob1,bob2,bob3,bob4,bob5;
var rope1,rope2,rope3,rope4,rope5;

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;
	//Create the Bodies Here.
    ground = new Ground(400,680,800,20);
	roof = new Roof(400,200,400,20);
	bob1 = new Bob(400,400,90);
  bob2 = new Bob(490,400,90);
  bob3 = new Bob(580,400,90);
  bob4 = new Bob(310,400,90);
  bob5 = new Bob(80,400,90);
	rope1 = new Rope(bob1.body,400,200);
  rope2 = new Rope(bob2.body,490,200);
  rope3 = new Rope(bob3.body,580,200);
  rope4 = new Rope(bob4.body,310,200);
  rope5 = new Rope(bob5.body,220,200);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  ground.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  roof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
}



