var helicopterIMG , helicopterSprite ,packageSprite , packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
  helicopterIMG=loadImage("helicopter.png")
  packageIMG=loadImage("package.png")
}

function setup() {
  createCanvas(800,400);
  rectMode(CENTER);


  packageSprite=createSprite(width/2,80,10,10);
  packageSprite.addImage(packageIMG)
  packageSprite.scale=0.2

  packageSprite.X =packageBody.position.X
  packageSprite.Y = packageBody.position.y

  helicopterSprite=(width/2,200,10,10);
  helicopterSprite.addImage(helicopterIMG)
  helicopterSprite.scale = 0.6

groundSprite=createSprite(width/2,height - 35,width,10);
groundSprite.shapeColor(225)

line1=createSprite(width/2,height-35,width,10);
line1.shapeColor=color("red");
line2=createSprite(510,610,20,100);
line2.shapeColor=color("red");
line3=createSprite(310,610,20,100);
line3.shapeColor=color("red");


Engine = Engine.create();
world = engine.world;

packageBody = Bodies.circle(width/2 , 200 , 10,{restitution3 , isStatic:true});
World.add(world,packageBody);

packageBody = Bodies.circle(width/2 , 200 , 10,{restitution3 , isStatic:true});
World.add(world,packageBody1);

packageBody = Bodies.circle(width/2 , 200 , 15,{restitution3 , isStatic:true});
World.add(world,packageBody2);



  
//Create a Ground
ground = Bodies.rectangle(width/2 , 650 , width , 10 ,{isStatic:true});
World.add(world,ground);
 
}

      

function draw() {
  background(255,255,255);  
  drawSprites();
} 