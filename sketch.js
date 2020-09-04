
var movingRect,fixedRect;

function setup() {
  createCanvas(1200,400);
  
  movingRect = createSprite(200, 200, 50, 50);
  movingRect.shapeColor="blue";
  movingRect.velocityX=6;
  fixedRect = createSprite(800,200,50,50);
  fixedRect.shapeColor="blue";
  fixedRect.velocityX=-6;
}

function draw() {
  background(255,255,255);  

  /*movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;*/

  bounceOff(movingRect,fixedRect);
  
  if(isTouching(movingRect,fixedRect)){
    movingRect.shapeColor="blue";
    fixedRect.shapeColor="blue";
  }else{
    fixedRect.shapeColor="red";
    movingRect.shapeColor="red";
  }

  drawSprites();
}
