var backGround, backGroundImg, cat, catImg, catImg2, catImg3, 
rat, ratImg, ratImg2, ratImg3    
    
//gamestates
var PLAY=1;
var END=0;
var gameState=PLAY;

function preload() {
    //load the images here
      backGroundImg=loadImage("garden.png")
      catImg=loadAnimation("cat1.png")
      catImg2=loadAnimation("cat2.png","cat3.png")
      catImg3=loadAnimation("cat4.png")
      ratImg=loadAnimation("mouse2.png", "mouse3.png")
      ratImg2=loadAnimation("mouse1.png","mouse4.png")
}

function setup(){
    createCanvas(700,500);
    //create tom and jerry sprites here
      backGround=createSprite(350,250, 20,20)
      backGround.addImage(backGroundImg)
      
      cat=createSprite(600, 450, 20,20)
      cat.addAnimation("sitting", catImg)
      cat.scale=0.1
      cat.addAnimation("standing", catImg3)
  
      rat=createSprite(150,450, 20, 20)
      rat.addAnimation("ratMoving", ratImg)
      rat.scale=0.1
      rat.addAnimation("teasing", ratImg2)
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
      if(gameState===PLAY){
        
         if(cat.x-rat.x<cat.width/5+rat.width/5){
            gameState=END
            
      }
      }
      if(gameState===END){
        cat.velocityX=0
        cat.changeAnimation("standing", catImg3)
        rat.changeAnimation("teasing", ratImg2)
        
      if(keyDown("space")){
         gameState=PLAY
         cat.changeAnimation("sitting", catImg)
         rat.changeAnimation("ratMoving", ratImg)
         cat.x=600  
         cat.y=450
      }
      }
      
    drawSprites();
}

function keyPressed(){
  //For moving and changing animation write code here
    if(keyCode === LEFT_ARROW){
       cat.velocityX=-5
       cat.addAnimation("catRunning", catImg2)
       cat.changeAnimation("catRunning");
       }
}

function isTouching(ob1, ob2){
   function isTouching(ob1, ob2){
    if(ob1.x-ob2.x<ob2.width/2+ob1.width/2  
       && ob2.x-ob1.x<ob2.width/2+ob1.width/2   
       && ob2.y-ob1.y<ob2.height/2+ob1.height/2 
       && ob1.y-ob2.y<ob2.height/2+ob1.height/2 ){
     return true
   }
 else {
     return false
      }
   }
   }