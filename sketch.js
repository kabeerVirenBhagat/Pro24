
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var basket1,paperObject,groundObject;
var world;

function setup() {
	createCanvas(1250, 650);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;
	
	paperObject = new Paper(200,450,70);
	groundObject = new Ground(width/2,620,width,20);
	basket1 = new Basket(1200,510,20,200);
	basket2 = new Basket(1000,510,20,200);
	basket3 = new Basket(1100,600,200,20);
	
	Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background("orange");
  
  paperObject.display();
  groundObject.display();
  basket1.display();
  basket2.display();
  basket3.display();
}

function keyPressed() {
  if(keyCode === UP_ARROW) {
    Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:130,y:-145});
  }
}