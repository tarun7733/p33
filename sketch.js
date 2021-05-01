const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;



var snowImg
var boy
var boyImg
var edges
var snow1
var snowArry=[]
function preload(){
snowImg=loadImage("snow2.jpg")
boyImg=loadImage("winter boy.png")
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  boy=createSprite(width/2,height*3/4)
  boy.addImage(boyImg)
  edges=createEdgeSprites()
  boy.setCollider("circle",0,0,50)
  boy.debug=true
  engine = Engine.create();
  world = engine.world;

}

function draw() {
  background(snowImg);  
  Engine.update(engine);
  drawSprites();
if (keyDown(RIGHT_ARROW)){
boy.velocityX=2
}
if (keyDown(LEFT_ARROW)){
  boy.velocityX=-2
  }
boy.bounceOff(edges[1])
boy.bounceOff(edges[0])
if(frameCount%20===0){
snow1=new Snow(random(10,width-10),random(10,50),60)
console.log(snow1)
snowArry.push(snow1)

}
for(var i=0;i<snowArry.length;i++){
snowArry[i].display()

}

}
