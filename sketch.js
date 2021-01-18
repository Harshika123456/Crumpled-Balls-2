const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var ground;
var paper;
var db1, db2, db3;

function setup() {
createCanvas(800, 700);

engine = Engine.create();
world = engine.world;

ground = new Ground(400, 675, 800, 15);
paper = new Paper(100, 600, 20);
db1 = new Dustbin(605, 658, 200, 20);

Engine.run(engine);
}

function draw() {
rectMode(CENTER);
background("pink");
Engine.update(engine);

ground.display();
db1.display();
paper.display();

drawSprites();
}

function keyPressed(){
if(keyCode === UP_ARROW) {
   Matter.Body.applyForce(paper.body, paper.body.position, {x:68, y: -68})
}
}