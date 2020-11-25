const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var gameState
function setup() {
  createCanvas(1000,800);
  stroke(255)

  engine = Engine.create();
  world = engine.world;
gameState = "attached"

 Polygon = new polygon(200,450,50,50)
 slingShot = new SlingShot(Polygon.body,{x:200,y:500})
 ground = new Ground(500,800,1000,10)
 ground2 = new Ground(800,500,200,10)
 ground3 = new Ground(995,400,10,800)
 ground4 = new Ground(5,400,10,800)
 ground5 = new Ground(500,5,1000,10)
 block3 = new Block(740,475,30,50,"purple")
 block1 = new Block(770,475,30,50,"purple")
block = new Block(800,450,30,50,"purple")
block2 = new Block(830,475,30,50,"purple")
block4 = new Block(860,475,30,50,"purple")
block2A = new Block(790,425,30,50,"orange")
block1A = new Block(800,425,30,50,"orange")
blockA = new Block(830,425,30,50,"orange")
block3A = new Block(845,425,30,50,"orange")
blockB = new Block(820,375,30,50,"red")
blockB1 = new Block(840,375,30,50,"red")
blockB2 = new Block(790,375,30,50,"red")
blockC = new Block(835,325,30,50,"green")
blockC1 = new Block(805,325,30,50,"green")
blockB = new Block(820,275,30,50,"black")
Engine.run(engine)
}

function mouseDragged(){
  if(gameState == "attached")
      Matter.Body.setPosition(Polygon.body, {x: mouseX , y: mouseY});
  
}


function mouseReleased(){
  if(gameState === "attached")
  slingShot.fly()
  gameState = "launched";
}
function draw() {

  if (keyDown("r")) {
    gameState = "attached"
    slingShot.attach(Polygon.body)
  }
  
  background("white");  
  Polygon.display()
  slingShot.display()
  ground2.display()
  ground.display()
  ground3.display()
  ground4.display()
  ground5.display()
  block.display()
  block1.display()
  block2.display()
  block3.display()
  block4.display()
  blockA.display()
  block1A.display()
  block2A.display()
  block3A.display()
  blockB.display()
  blockB1.display()
  blockB2.display()
  blockC.display()
  blockC1.display()
  blockB.display()
 drawSprites();
}

function keyPressed(){
  if(keyCode === 32){
      slingshot.attach(Polygon.body);
  }
}

function keyPressed ()
{

} 