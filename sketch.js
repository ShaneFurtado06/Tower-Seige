//Tower Seige
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var gameState="Sling";
var score=0,chance=0;

function preload(){
    poly_ball=loadImage("polygon.png");
}

function setup(){
    createCanvas(window.innerWidth,window.innerHeight);
    engine = Engine.create();
    world = engine.world;
    Engine.run(engine);

    //ground
    mainGround=new Ground(window.innerWidth*0,window.innerHeight*0+675,20000);

    //stands
    s1=new Stand(window.innerWidth*0+650,window.innerHeight*0+400);
    s2=new Stand(window.innerWidth*0+1150,window.innerHeight*0+250);

    //creating polygon ball n slingshot
    ball=Bodies.circle(window.innerWidth*0+170,window.innerHeight*0+200,20,{'friction':0.1,'restitution':1,'density':2.4});   
    World.add(world,ball);

    sling=new SlingShot(ball,{x:window.innerWidth*0+270,y:window.innerHeight*0+200});

    //boxes
    //stand1
    //stack1
    b1=new Box(window.innerWidth*0+470,window.innerHeight*0+380);
    b2=new Box(window.innerWidth*0+515,window.innerHeight*0+380);
    b3=new Box(window.innerWidth*0+560,window.innerHeight*0+380);
    b4=new Box(window.innerWidth*0+605,window.innerHeight*0+380);
    b5=new Box(window.innerWidth*0+650,window.innerHeight*0+380);
    b6=new Box(window.innerWidth*0+695,window.innerHeight*0+380);
    b7=new Box(window.innerWidth*0+740,window.innerHeight*0+380);
    b8=new Box(window.innerWidth*0+785,window.innerHeight*0+380);
    b9=new Box(window.innerWidth*0+830,window.innerHeight*0+380);
    //stack2
    b10=new Box(window.innerWidth*0+487,window.innerHeight*0+340);
    b11=new Box(window.innerWidth*0+532,window.innerHeight*0+340);
    b12=new Box(window.innerWidth*0+577,window.innerHeight*0+340);
    b13=new Box(window.innerWidth*0+622,window.innerHeight*0+340);
    b14=new Box(window.innerWidth*0+667,window.innerHeight*0+340);
    b15=new Box(window.innerWidth*0+712,window.innerHeight*0+340);
    b16=new Box(window.innerWidth*0+757,window.innerHeight*0+340);
    b17=new Box(window.innerWidth*0+802,window.innerHeight*0+340);
    //stack3
    b18=new Box(window.innerWidth*0+487+45,window.innerHeight*0+300);
    b19=new Box(window.innerWidth*0+532+45,window.innerHeight*0+300);
    b20=new Box(window.innerWidth*0+577+45,window.innerHeight*0+300);
    b21=new Box(window.innerWidth*0+622+45,window.innerHeight*0+300);
    b22=new Box(window.innerWidth*0+667+45,window.innerHeight*0+300);
    b23=new Box(window.innerWidth*0+712+45,window.innerHeight*0+300);
    //stack4
    b24=new Box(window.innerWidth*0+577+1,window.innerHeight*0+260);
    b25=new Box(window.innerWidth*0+622+1,window.innerHeight*0+260);
    b26=new Box(window.innerWidth*0+667+1,window.innerHeight*0+260);
    b27=new Box(window.innerWidth*0+712+1,window.innerHeight*0+260);
    //stack5
    b28=new Box(window.innerWidth*0+577+26,window.innerHeight*0+220);
    b29=new Box(window.innerWidth*0+622+26,window.innerHeight*0+220);
    b30=new Box(window.innerWidth*0+667+26,window.innerHeight*0+220);
    //stack6
    b31=new Box(window.innerWidth*0+622+5,window.innerHeight*0+180);
    b32=new Box(window.innerWidth*0+667+5,window.innerHeight*0+180);
    //stack7
    b33=new Box(window.innerWidth*0+650,window.innerHeight*0+140);


    //stand2
    //stack1
    c1=new Box(window.innerWidth*0+970+45,window.innerHeight*0+230);
    c2=new Box(window.innerWidth*0+1015+45,window.innerHeight*0+230);
    c3=new Box(window.innerWidth*0+1060+45,window.innerHeight*0+230);
    c4=new Box(window.innerWidth*0+1105+45,window.innerHeight*0+230);
    c5=new Box(window.innerWidth*0+1150+45,window.innerHeight*0+230);
    c6=new Box(window.innerWidth*0+1195+45,window.innerHeight*0+230);
    c7=new Box(window.innerWidth*0+1240+45,window.innerHeight*0+230);
    //stack2
    c8=new Box(window.innerWidth*0+970+90,window.innerHeight*0+190);
    c9=new Box(window.innerWidth*0+1015+90,window.innerHeight*0+190);
    c10=new Box(window.innerWidth*0+1060+90,window.innerHeight*0+190);
    c11=new Box(window.innerWidth*0+1105+90,window.innerHeight*0+190);
    c12=new Box(window.innerWidth*0+1150+90,window.innerHeight*0+190);
    //stack3
    c13=new Box(window.innerWidth*0+1060+45,window.innerHeight*0+150);
    c14=new Box(window.innerWidth*0+1105+45,window.innerHeight*0+150);
    c15=new Box(window.innerWidth*0+1150+45,window.innerHeight*0+150);
    //stack4
    c16=new Box(window.innerWidth*0+1105+30,window.innerHeight*0+110);
    c17=new Box(window.innerWidth*0+1150+30,window.innerHeight*0+110);
    //stack5
    c18=new Box(window.innerWidth*0+1060+100,window.innerHeight*0+70);
}

function draw(){
    background ("black");

    textSize(20);
    fill ("white");
    text ("Drag and hit the hexagon at the boxes!",window.innerWidth*0+20,window.innerHeight*0+50);
    text ("Press 'SPACE' to start again!",window.innerWidth*0+20,window.innerHeight*0+80);
    text ("You have 4 chances to win!",window.innerWidth*0+20,window.innerHeight*0+110);

    text ("Score: "+score,window.innerWidth-140,window.innerHeight-70);
    text ("Chance: "+chance,window.innerWidth-340,window.innerHeight-70)


    //display ball
    imageMode (CENTER);
    image (poly_ball,ball.position.x,ball.position.y,60,60);
    sling.display();
    
    //ground
    mainGround.display();
    
    //stands
    s1.display();
    s2.display();

    //boxes
    //stand1
    //stack1
    b1.display();
    b2.display();
    b3.display();
    b4.display();
    b5.display();
    b6.display();
    b7.display();
    b8.display();
    b9.display();
    //stack2
    b10.display();
    b11.display();
    b12.display();
    b13.display();
    b14.display();
    b15.display();
    b16.display();
    b17.display();
    //stack3
    b18.display();
    b19.display();
    b20.display();
    b21.display();
    b22.display();
    b23.display();
    //stack4
    b24.display();
    b25.display();
    b26.display();
    b27.display();
    //stack5
    b28.display();
    b29.display();
    b30.display();
    //stack6
    b31.display();
    b32.display();
    //stack7
    b33.display();

    //stand2
    //stack1
    c1.display();
    c2.display();
    c3.display();
    c4.display();
    c5.display();
    c6.display();
    c7.display();
    //stack2
    c8.display();
    c9.display();
    c10.display();
    c11.display();
    c12.display();
    //stack3
    c13.display();
    c14.display();
    c15.display();
    //stack4
    c16.display();
    c17.display();
    //stack5
    c18.display();

    //increase score
    

    drawSprites();
}

function mouseDragged(){
    if(gameState==="Sling"){
        Matter.Body.setPosition(this.ball, {x: mouseX , y: mouseY});
    }    
}

function mouseReleased(){
    sling.ballFly();
    gameState="Launched";
}


function keyPressed(){
    if(keyCode===32&&chance<4){
        gameState="Sling"
        Matter.Body.setPosition(this.ball,{x:window.innerWidth*0+270,y:window.innerHeight*0+200});
        sling.reAttach(this.ball);
        chance++;
    }
}