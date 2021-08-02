var boy;
var boyImg;
var cash ;
var cashImg;
var bg;
var rock,rockImg;
var dog,dogImg;
var cone,coneImg;

// create database and position variable here
var database ;
var position ; 
var updateHeight;

function preload(){
   bg =loadImage("bg.jpg");
   boyImg =loadImage("boy.png");
   cashImg=loadImage("cash.png");
   coneImg=loadImage("cone.png");
   rockImg=loadImage("rock.png");
   dogImg=loadImage("dog.png");
  }

function setup() {
  database=firebase.database();
  createCanvas(1500,700);

  boy=createSprite(250,450,150,150);
  boy.addImage(boyImg);
  boy.scale=0.6;

  cash=createSprite(500,550,150,150);
  cash.addImage(cashImg);
  cash.scale=0.4;

  cone=createSprite(500,550,150,150);
  cone.addImage(coneImg);
  cone.scale=0.4;

  dog=createSprite(500,550,150,150);
  dog.addImage(dogImg);
  dog.scale=0.4;

  rock=createSprite(500,550,150,150);
  rock.addImage(cashImg);
  rock.scale=0.4;

  var boyPosition=database.ref('boy/height')
  boyPosition.on("value",readHeight)
  

  textSize(20); 
}

// function to display UI
function draw() {
  background(bg);
  if(keyDown(LEFT_ARROW)){
    boy.x=boy.x-10;
  }
  else if(keyDown(RIGHT_ARROW)){
    boy.x=boy.x+10;
  }

  drawSprites();
  fill(0);
  stroke("white");
  textSize(25);
  text("Use arrow keys to move the boy",40,40);
}

function updateHeight(x,y){
 database.ref('boy/height').set({
 'x': height.x + x ,
 'y': height.y + y
})}

function readHeight(data){
 height = data.val();
 boy.x = height.x;
 boy.y = height.y; 
}
  
  
for (let i = 0; i = 100 ; i++) {
  cone(); ;
  } 
  
  function cone(){
   
   var cone=createSprite(random(100,200),80,10,10); 
   cone.velocityY=2;
   cone.addImage(coneImg) ; 
   cone.scale=0.05;
   cone.lifetime=100;
  }   
  
  function rock(){
  
   var rock=createSprite(random(50,350),80,10,10); 
  rock.velocityY=2;
  rock.addImage(rockImg) ; 
  rock.scale=0.05; 
  rock.lifetime=100;  
  }
  
  function dog(){
  
   var dog=createSprite(random(300,330),80,10,10); 
  dog.velocityY=2;
  dog.addImage(dogImg) ; 
  dog.scale=0.1; 
  dog.lifetime=100;
  }
    
  
  
  
  
  
  



 

