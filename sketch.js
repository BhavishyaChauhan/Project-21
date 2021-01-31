var bullet;
var wall;
var speed;
var weght;
var deformation;
var thickness;

function setup() {
  createCanvas(1600,400);

thickness=random(22,83)
speed=random(223,321)
weight=random(30,52)

bullet=createSprite(50,200,50,20)
bullet.velocityX=speed;
bullet.shapeColor="white"

wall=createSprite(1200,200,thickness,height/2)
wall.shapeColor=color(80,80,80)

}

function draw() {
  background(0,0,0);  

  text(deformation,200,200)

  if(bullet.collide(wall)){
    bullet.velocityX=0
    deformation=(0.5*weight*speed*speed)/(thickness*thickness*thickness)
  
  if(deformation<10){
    bullet.shapeColor=color(0,233,0)
  }
  else{
    bullet.shapeColor="red"
  }

  }


  drawSprites();
}

function collide(object1,object2){
  if(object1.x-object2.x<object2.width/2+object2.width/2){
    object1.velocityX=0
  }
}


