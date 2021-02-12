var mazeImage;
var PakImage
var wall1, wall2, wall3, wall4, wall5, wall6, wall7, wall8, wall9,
wall10, wall11, wall12, wall13, wall14, wall15, wall16, wall17, wall18, wall9,
wall20, wall21, wall22, wall23, wall24, wall25, wall26, wall27, wall28, wall29,
wall30, wall31, wall32, wall33, wall34, wall35, wall36, wall37, wall38, wall39,
wall40, wall41, wall42, wall43, wall44, wall45, wall46, wall47, wall48, wall49,
wall50, pakman, pinkG, purpleG, blueG, redG;
var walls = []
function preload(){
mazeImage = loadImage("googlepacman.png")
PakImage = loadImage("Pakman.png")
}

function setup() {
  createCanvas(1000,700);
  pik = createSprite(1, 1, 1, 1)

  // wall1 = createSprite(500,103,830,10);
  // wall2 = createSprite(500,598,830,10);
  // wall3 = createSprite(85,512,10,175);
  // wall4 = createSprite(915,512,10,175);
  // wall5 = createSprite(915,185,10,175);
  // wall6 = createSprite(85,185,10,175);
  // wall7 = createSprite(115,432,65,10);
  // wall8 = createSprite(115,387,65,10);
  // wall9 = createSprite(115,267,65,10);
  // wall10 = createSprite(115,312,65,10);
  // wall11 = createSprite(883,432,65,10);
  // wall12 = createSprite(883,387,65,10);
  // wall13 = createSprite(883,267,65,10);
  // wall14 = createSprite(883,312,65,10);
  // wall15 = createSprite(855,290,10,50);
  // wall16 = createSprite(855,405,10,50);
  // wall17 = createSprite(143,290,10,50);
  // wall18 = createSprite(143,405,10,50);
  // wall19 = createSprite(231,200,119,60);
  // wall20 = createSprite(190,335,37,210);
  // wall21 = createSprite(245,410,90,60);
  // wall22 = createSprite(275,335,30,90);
  // wall23 = createSprite(250,305,30,30);
  // wall24 = createSprite(363,350,90,180);
  // wall25 = createSprite(477,350,90,180);
  // wall26 = createSprite(695,305,30,270);
  // wall27 = createSprite(780,305,90,90);
  // wall28 = createSprite(755,390,40,101);
  // wall29 = createSprite(785,425,80,32);
  // wall30 = createSprite(601,485,14,87);
  // wall31 = createSprite(601,455,100,29);
  // wall32 = createSprite(738,516,115,29);
  // wall33 = createSprite(855,516,60,29);
  // wall34 = createSprite(457,516,128,29);
  // wall35 = createSprite(255,516,128,29);
  // wall36 = createSprite(138,516,40,29);
  // wall37 = createSprite(420,185,205,29);
  // wall38 = createSprite(130,184,30,29);
  // wall39 = createSprite(600,185,107,29);
  // wall40 = createSprite(767,185,60,29);
  // wall41 = createSprite(855,185,60,29);
  // wall42 = createSprite(355,550,13,95);
  // wall43 = createSprite(557,567,13,69);
  // wall44 = createSprite(645,567,13,69);
  // wall45 = createSprite(601,372,103,13);
  // wall46 = createSprite(555,316,10,103);
  // wall47 = createSprite(647,316,10,103);
  // wall48 = createSprite(569,271,30,13);
  // wall49 = createSprite(632,271,30,13);

  wall1 = createSprite(500,103,830,10);
  wall2 = createSprite(500,598,830,10);
  wall3 = createSprite(85,512,10,175);
  wall4 = createSprite(915,512,10,175);
  wall5 = createSprite(915,185,10,175);
  wall6 = createSprite(85,185,10,175);
  wall7 = createSprite(115,432,65,10);
  wall8 = createSprite(115,387,65,10);
  wall9 = createSprite(115,267,65,10);
  wall10 = createSprite(115,312,65,10);
  wall11 = createSprite(883,432,65,10);
  wall12 = createSprite(883,387,65,10);
  wall13 = createSprite(883,267,65,10);
  wall14 = createSprite(883,312,65,10);
  wall15 = createSprite(855,290,10,50);
  wall16 = createSprite(855,405,10,50);
  wall17 = createSprite(143,290,10,50);
  wall18 = createSprite(143,405,10,50);
  wall19 = createSprite(231,200,119,60);
  wall20 = createSprite(190,335,37,210);
  wall21 = createSprite(245,410,90,60);
  wall22 = createSprite(275,335,30,90);
  wall23 = createSprite(250,305,30,30);
  wall24 = createSprite(363,350,90,180);
  wall25 = createSprite(477,350,90,180);
  wall26 = createSprite(695,305,30,270);
  wall27 = createSprite(780,305,90,90);
  wall28 = createSprite(755,390,40,101);
  wall29 = createSprite(785,425,80,32);
  wall30 = createSprite(601,485,14,87);
  wall31 = createSprite(601,455,100,29);
  wall32 = createSprite(738,516,115,29);
  wall33 = createSprite(855,516,60,29);
  wall34 = createSprite(457,516,128,29);
  wall35 = createSprite(255,516,128,29);
  wall36 = createSprite(138,516,40,29);
  wall37 = createSprite(420,185,205,29);
  wall38 = createSprite(130,184,30,29);
  wall39 = createSprite(600,185,107,29);
  wall40 = createSprite(767,185,60,29);
  wall41 = createSprite(855,185,60,29);
  wall42 = createSprite(355,550,13,95);
  wall43 = createSprite(557,567,13,69);
  wall44 = createSprite(645,567,13,69);
  wall45 = createSprite(601,372,103,13);
  wall46 = createSprite(555,316,10,103);
  wall47 = createSprite(647,316,10,103);
  wall48 = createSprite(569,271,30,13);
  wall49 = createSprite(632,271,30,13);
  wall50 = createSprite(532,175,30,10);
  
  walls = [wall1, wall2, wall3, wall4, wall5, wall6, wall7, wall8, wall9,
     wall10, wall11, wall12, wall13, wall14, wall15, wall16, wall17, wall18, wall19,
     wall20, wall21, wall22, wall23, wall24, wall25, wall26, wall27, wall28, wall29,
     wall30, wall31, wall32, wall33, wall34, wall35, wall36, wall37, wall38, wall39,
     wall40, wall41, wall42, wall43, wall44, wall45, wall46, wall47, wall48, wall49,
     wall50
    ]
  pakman = createSprite(600, 558, 20, 20)
  pakman.addImage(PakImage)
  pakman.scale = 0.05
  redG = createSprite(600, 321, 20, 20)
  blueG = createSprite(600, 321, 20, 20)
  purpleG = createSprite(600, 321, 20, 20)
  pinkG = createSprite(600, 321, 20, 20)
  redG.velocityX = -2
  redG.velocityY = 0
  blueG.velocityX = 2
  blueG.velocityY = 0
  purpleG.velocityX = 0
  purpleG.velocityY = 2
  pinkG.velocityX = 0
  pinkG.velocityY = -2

  

  
  for(var i = 0;i<walls.length;i++){
    walls[i].visible = false;

  }




}

function draw() {
  // background(mazeImage);
  background(0);
  imageMode(CENTER)
  image(mazeImage, 500, 350, 840,570)
  drawSprites()
  fill("red")
  text(mouseX +"," + mouseY, mouseX, mouseY)
  
  if(keyDown(UP_ARROW)){
    pakman.velocityY = -4
    pakman.velocityX= 0
  }    
  if(keyDown(DOWN_ARROW)){
    pakman.velocityY = +4
    pakman.velocityX= 0
  }    
  if(keyDown(RIGHT_ARROW)){
    pakman.velocityX = +4
    pakman.velocityY = 0
  }    
  if(keyDown(LEFT_ARROW)){
    pakman.velocityX= -4
    pakman.velocityY = 0
  }    

  for(var i = 0; i<walls.length; i++){
    pakman.collide(walls[i])
  }
  for(var i = 0; i<walls.length; i++){

    if(redG.isTouching(walls[i])){
      ghostRand(redG);
    }
    if(blueG.isTouching(walls[i])){
      ghostRand(blueG);
    }
    if(pinkG.isTouching(walls[i])){
      ghostRand(pinkG);
    }
    if(purpleG.isTouching(walls[i])){
      ghostRand(purpleG);
    }
  }
  
  for(var i = 0; i<walls.length; i++){
    redG.bounceOff(walls[i])
    purpleG.bounceOff(walls[i])
    pinkG.bounceOff(walls[i])
    blueG.bounceOff(walls[i])
  }  

ghostMove(redG)
ghostMove(purpleG)
ghostMove(pinkG)
ghostMove(blueG)

}

 function ghostMove(ghost){
   if(ghost.x>pakman.x){
     ghost.velocityX = -2
   }
   else{
     ghost.velocityX = 2
     
   }
   if(ghost.y>pakman.y){
    ghost.velocityY = -2
  }
  else{
    ghost.velocityY = 2
  }


 }
 function ghostRand(ghost){
    var rand = Math.round(random(-1,1));
   var randV = Math.round(random(0,1));
   if(randV===0){
     ghost.velocityX = rand;
     ghost.velocityY = 0
   }
   if(randV===1){
    ghost.velocityY = rand;
    ghost.velocityX = 0

   }
  }