var bullet, wall;
var speed, weight, thick;
var damage;

function setup(){
 var canvasWidth = 600;   
createCanvas(canvasWidth*2, canvasWidth);
speed = parseInt(random(30, 150));
weight = random(32, 80);
thick = random(40, 90);
damage = 0.5*weight*speed^2/thick^3;

wall = createSprite(canvasWidth*2 - 40, canvasWidth*0.5, thick, 40);
bullet = createSprite(canvasWidth*0, canvasWidth/2, 40, 10);
bullet.velocityX = speed;
console.log(speed);
console.log(damage);
}

function draw(){
background(220);

if(isTouching(wall, bullet)){
    bullet.velocityX = 0;
    if(damage > 1500){
      bullet.shapeColor="red";
  } else {
      bullet.shapeColor="green";
  }
}
drawSprites();
}