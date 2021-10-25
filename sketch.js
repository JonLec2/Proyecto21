var astro
var sleep
var bg
var gym
var brush
var baño
var comer
var mover
var bloque, bloque2, bloque3, bloque4

function preload(){
bg=loadImage("ram/iss.png")
sleep=loadAnimation("ram/sleep.png")
gym=loadAnimation("ram/gym11.png", "ram/gym12.png")
brush=loadAnimation("ram/brush.png")
baño=loadAnimation("ram/bath1.png", "ram/bath2.png")
comer=loadAnimation("ram/eat1.png", "ram/eat2.png")
mover=loadAnimation("ram/move.png")

}

function setup(){
createCanvas(400, 400)

astro=createSprite(200, 200, 10, 10);
astro.addAnimation("dormir", sleep)
astro.scale=0.08
astro.debug=true
astro.setCollider("rectangle",0,0,10,10)

bloque=createSprite(450,200, 10, 400);
bloque2=createSprite(-50, 200, 10, 400)
bloque3=createSprite(200, -50, 400, 10)
bloque4=createSprite(200, 450, 400, 10)

}

function draw(){
background(bg)

edges= createEdgeSprites();

bounceOff(astro, bloque)
bounceOff(astro, bloque2)
bounceOff(astro, bloque3)
bounceOff(astro, bloque4)

if(keyDown("down_arrow")){
    astro.addAnimation("correr", gym)
    astro.changeAnimation("correr", gym)
    astro.y=220
    astro.x=200
    astro.velocityX=0
    astro.velocityY=0
}

if(keyDown("up_arrow")){
    astro.addAnimation("brush", brush)
    astro.changeAnimation("brush", brush)
    astro.y=270
    astro.x=200
    astro.velocityX=0
    astro.velocityY=0
}

if(keyDown("left_arrow")){
astro.addAnimation("baño", baño)
astro.changeAnimation("baño", baño)
astro.y=270
astro.x=200
astro.velocityX=0
astro.velocityY=0
}

if(keyDown("right_arrow")){
astro.addAnimation("comer", comer)
astro.changeAnimation("comer", comer)
astro.y=270
astro.x=200
astro.velocityX=0
astro.velocityY=0
}


if(keyDown("space")){
    astro.addAnimation("mover", mover)
   astro.changeAnimation("mover", mover)
    astro.velocityX=2
    astro.velocityY=2

}


drawSprites();
fill("white")
stroke("white")
textFont("white")
textSize(14)
text("Instrucciones:", 30, 35)
text("Flecha hacia arriba=Cepillarse", 30, 50);
text("Flecha hacia abajo=Ejercitarse", 30, 65);
text("Flecha hacia la derecha=Comer", 30, 80);
text("Flecha hacia la izquierda=Bañarse", 30, 95)
text("Presiona la letra m para moverte", 30, 110)

}