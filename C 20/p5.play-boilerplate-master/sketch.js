var fixedRect,movingRect
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 50);
  fixedRect.shapeColor = "green"
  movingRect = createSprite(800, 400, 80, 80);
  movingRect.shapeColor = "green"
}

function draw() {
  background(0);  

  movingRect.x = mouseX
  movingRect.y = mouseY

  if (movingRect.x - fixedRect.x <=(movingRect.width+fixedRect.width)/2 &&
  fixedRect.x - movingRect.x <=(movingRect.width+fixedRect.width)/2 &&
  movingRect.y - fixedRect.y <=(movingRect.height+fixedRect.height)/2 &&
  fixedRect.y - movingRect.y <=(movingRect.height+fixedRect.height)/2 )  {
    fixedRect.shapeColor="red"
    movingRect.shapeColor="red"
  } else {
    fixedRect.shapeColor="green"
    movingRect.shapeColor="green"
  }

  drawSprites();
}