//Global Variables
var bananaImage, obstacleImage , obstaclesgroup, background , score,invisibleGround;
var foodGroup;
var PLAY;
var END;
var gameState=PLAY;



var score=0;
function preload(){
  bananaImage=loadImage("banana.png");  
  stoneImage=loadImage("stone.png");
  backImage=loadImage("jungle.jpg");
  
  player_running=loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  
}


function setup() {
  createCanvas(600,300);
  backGround=createSprite(502,50,100,100);
  backGround.addImage(backImage);
  backGround.velocityX=-2;
  
  invisibleGround=createSprite(300,280,800,10);
  invisibleGround.visible=false;
  
  monkey=createSprite(100,225);
  monkey.addAnimation("running",player_running);
  monkey.scale=0.15;
  
   foodGroup=new Group();
  obstaclesGroup=new Group();
  
}


function draw(){
 
 background(150); 
  
  monkey.collide(invisibleGround);
  
  
      
      
      
      
    if (backGround.x < 100){
      backGround.x = backGround.width/2;
        
      }
  if(keyDown("space") && monkey.y >= 200){
      monkey.velocityY = -16 ;
      
    }
  if(foodGroup.isTouching(monkey)) {
     foodGroup.destroyEach();
     score=score+2;   
     
     }
  if (obstaclesGroup.isTouching(monkey)) {
              
          gameState=END;      
      
      }
    if (obstaclesGroup.isTouching(monkey)) {
       
       monkey.scale=0.2;
       
       }
  switch(score) {
    case 10:monkey.scale=0.12;
      break;
       case 20:monkey.scale=0.12;
      break;
       case 30:monkey.scale=0.12;
      break;
       case 40:monkey.scale=0.12;
      break;
      
      default:break;
  
  }   
  
  
  monkey.velocityY = monkey.velocityY + 0.8
  stoneImage.velocityY = stoneImage.velocityY + 0.8
  


  spawnFood();
  
  spawnObstacles();
  drawSprites();
  stroke=("white");
  textSize(20);
  fill("white");
  text("Score "+score,450,60);
   
}

function spawnFood() {
  if (frameCount % 100 === 0) {
    var banana = createSprite(600,320,40,10);
    banana.y = Math.round(random(100,140));
    banana.addImage(bananaImage);
    banana.scale = 0.08;
    banana.velocityX = -5;
    banana.lifetime=150;

    foodGroup.add(banana);
  }


}


function spawnObstacles() {
    if (frameCount % 180 === 0) {
     var stone = createSprite(600,225,40,10);
    stone.y = Math.round(random(240,240));
    stone.addImage(stoneImage);
    stone.scale = 0.20;
    stone.velocityX = -5;
    stone.lifetime=150;

    obstaclesGroup.add(stone);
  }
  
}







