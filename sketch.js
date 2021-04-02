var canvas, box1, box2, box3, box4, ball, edges;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
box1 = createSprite(0,180,360,30);
box1.shapeColor= rgb(0,0,255);

box2 = createSprite(295,580,200,30);
box2.shapeColor= rgb(255,128,0);

box3 = createSprite(515,580,200,30);
box3.shapeColor= rgb(153,0,76);

box4 = createSprite(740,580,220,30);
box4.shapeColor= rgb(0,100,0);
    //create box sprite and give velocity
ball=createSprite(random(20,750),100,40,40);
ball.shapeColor=rgb(250,250,250);
ball.velocityX=4
ball.velocityY=9

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
edges=createEdgeSprites();
ball.bounceOff(edges);

    //add condition to check if box touching surface and make it box
if(box1.isTouching(ball)&&ball.bounceOff(box1)) {
    ball.shapeColor=rgb(0,0,255);
    music.play();
}
if (box2.isTouching(ball)&&ball.bounceOff(box2)) {
    ball.shapeColor=rgb(255,128,0);
    music.stop();
}
if (box3.isTouching(ball)&&ball.bounceOff(box3)) {
    ball.shapeColor=rgb(253,0,76);
    music.play();
}
if (box4.isTouching(ball)&&ball.bounceOff(box4)) {
    ball.shapeColor=rgb(0,100,0);
    music.stop();
}
drawSprites();
}