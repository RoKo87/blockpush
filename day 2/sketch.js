const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var t = 0;

function setup(){
    var canvas = createCanvas(800,800);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(600,600,30,30);
    box2 = new Box(600,400,80,80);
    g = new Ground(400, 775, 800, 50)
    //console.log(box2.y)

    

    

    
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    g.display();
    console.log(t)

   
}