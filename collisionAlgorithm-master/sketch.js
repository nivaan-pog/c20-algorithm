var fixedRect, movingRect;
var a,b;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  b = createSprite(300, 200, 50, 80);
  b.shapeColor = "green";
  a = createSprite(600, 200, 50, 80);
  a.shapeColor = "green";
  a.velocityX = -3;
  b.velocityX= 3;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;



  
if(isTouching(a,movingRect)){
  movingRect.shapeColor = "red";
  a.shapeColor = "red"; 
}
else{
  movingRect.shapeColor = "green";
  a.shapeColor = "green";

}
bounceOff(a,b);
  drawSprites();
}
function isTouching(o1,o2){
  if (a.x - o2.x < o2.width/2 + o1.width/2
    && o2.x - o1.x < o2.width/2 + o1.width/2
    && o1.y - o2.y < o2.height/2 + o1.height/2
    && o2.y - o1.y < o2.height/2 + o1.height/2) {
return true;  
}
else {
return false;

}}

function bounceOff(o3,o4){
if(o3.x - o4.x < o4.width/2 + o3.width/2
  && o4.x - o3.x < o4.width/2 + o3.width/2){
o3.velocityX = o3.velocityX * (-1);
o4.velocityX = o4.velocityX * (-1);

}
else if(o3.y - o4.y < o4.height/2 + o3.height/2
  && o4.y - o3.y < o4.height/2 + o3.height/2){
    o3.velocityY = o3.velocityY * (-1);
    o4.velocityY = o4.velocityY * (-1);

}
}