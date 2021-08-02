const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine,world;
var backgroundImg;
var player,playerImg;
var snow;
var randm;
//


function preload(){

backgroundImg = loadImage("snow1.jpg");

}


function setup() {
  
 createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  engine = Engine.create();
  world = engine.world;
  
}

function draw() {
  background(backgroundImg); 
  //drawSprites();
  randm = Math.random(0,800);
  
  snow = new Snow(randm,0,10,10); 
  snow.display();

  


}