const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper,ground, dustbin;
var world;
	
function setup() {
	createCanvas(900, 500);

    engine = Engine.create();
    world = engine.world;

	paper=new Paper();
	ground=new Ground(450, 490, 900, 10);
	dustbin=new Dustbin();

	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background("black");
  ground.display();
  paper.display();
  dustbin.display();
 

}

function keyPressed(){

	if(keyCode == UP_ARROW){

		Matter.Body.applyForce(paper.body,paper.body.position,{x:40,y:-40})

	}

}