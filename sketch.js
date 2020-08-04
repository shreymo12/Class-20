var movingRect,fixedRect;


function setup() {
  createCanvas(1000,600);

  movingRect=createSprite(800,200,80,40);
  movingRect.shapeColor="green";
  fixedRect=createSprite(200,200,30,60);
  fixedRect.shapeColor="green";
}

function draw() {
  background("blue"); 
  
  movingRect.x=mouseX;
  movingRect.y=mouseY;
  if(movingRect.x-fixedRect.x<=movingRect.width/2+fixedRect.width/2 && 
    fixedRect.x-movingRect.x <= fixedRect.width/2+movingRect.width/2 && 
    fixedRect.y-movingRect.y<=fixedRect.height/2+movingRect.height/2&&
    movingRect.y-fixedRect.y<=movingRect.height/2+fixedRect.height/2)
    {
      fixedRect.shapeColor="red";
      movingRect.shapeColor="red";

    }
    else{
      fixedRect.shapeColor="green";
      movingRect.shapeColor="green";
    }
  
  drawSprites();
}