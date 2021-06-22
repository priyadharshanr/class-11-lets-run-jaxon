var man, man_running;

var path, path_road;
var scores;

function preload(){
  //pre-load images
  man_running = loadAnimation("runner-1.png","runner-2.png");
  

  path_road = loadAnimation("path.png");

}

function setup(){
  createCanvas(400,400);
  //create man sprite here
  

  path=createSprite(200,200)
  path.addAnimation("path_road",path_road)
  path.y = path.width/3
  path.velocityY=2
  
  
  man=createSprite(200,330);
  man.addAnimation("running",man_running)
  man.scale=0.1
  
  

  
}

function draw() {
  background(0);


  if(path.y > 400 ){
    path.y = height/2;
  }
  

  drawSprites();
}
