
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score = 0;
var survivalTime = 0;
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400);

  //to create monkey
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale = 0.1;
  
  //to create ground
  ground = createSprite(400,350,900,10);
  ground.velocityX = -4;
  ground.x = ground.width/2;
  console.log(ground.x);
  
  //to create generate the radmon number
  var rand = Math.round(random(1,100));
  console.log (rand);
  
  //to create groups
  FoodGroup = new Group;
  obstacleGroup = new Group;
}


function draw() {
background(255);
  
  stroke("white");
  textSize(20);
  fill("white");
  text("SCORE : " + score,500,50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime = Math.ceil(frameCount/frameRate())
  text("SURVIVAL TIME : " + survivalTime,100,50);
  
  //to repeat the background
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
   
  //when the space key is pressed the monkey should jump
  if(keyDown("space")){
    monkey.velocityY = -12;
  }
  
  //add gravity to monkey
  monkey.velocityY = monkey.velocityY + 0.8;
  
  //monkey should on ground
  monkey.collide(ground);
  
  //calling obstacles and food 
  food();
  obstacles();
  
  //to draw sprites
  drawSprites();
}

function food(){
  if(frameCount % 80 === 0){
    //banana.y = Math.round(random(120,200));
    banana = createSprite(400,120,20,20);
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -3;
    banana.lifetime = 110;
    
    FoodGroup.add(banana);
  }
}

function obstacles(){
  if(frameCount % 300 === 0){
  obstacle = createSprite(400,330,20,20);
  obstacle.addImage(obstaceImage);
  obstacle.scale = 0.1;
  obstacle.velocityX = -3;
  obstacle.lifetime = 110;
  
  obstacleGroup.add(obstacle);
  }
}

