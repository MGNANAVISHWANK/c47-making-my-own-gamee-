var bird , birdImg;;
var bgImg;
var pipe1 , pipe2;
var pipe
var gameOverImg , gameOver;
var retry , retryImg;;

var notTouching = 1; 
var touching = 0;
var gameState = notTouching;

var score = 0;


function preload(){
    bgImg = loadImage("bg.png");
    pipe1 = loadImage("pipe.png");
    pipe2 = loadImage("pipeFlip.png");
    birdImg = loadImage("vishwanksbird.png");
    gameOverImg = loadImage("gameOver.png");
    retryImg = loadImage("retryboissimvshwnk.png");

}

function setup(){
    createCanvas(windowWidth,windowHeight);

    bird = createSprite(200,100,20,20);
    bird.addImage(birdImg);
    bird.scale = 0.04;

    gameOver = createSprite(windowWidth/2,windowHeight/2,30,30);
    gameOver.addImage(gameOverImg);
    gameOver.scale = 0.3;
    gameOver.visible = false;

    retry = createSprite(90,110,20,30);
    retry.visible = false;
    retry.addImage(retryImg);
    retry.scale = 0.4;

    pipe1Group = new Group();
    pipe2Group = new Group();
}

function draw(){
    background(bgImg);

    bird.debug = true;

    if (mousePressedOver(retry)){
        reset();
    }
}
