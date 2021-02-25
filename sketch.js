const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var stone, rubber1;
var bgImg ;

function preload(){
bgImg = loadImage('sprites/bg.png')
}
function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

    
    ground = new Ground(600,height,1200,20);

    iron = new Iron(210,260,300, PI/2);
    
    sand1 = new Sand(370, 220);
    sand2 = new Sand(377, 220);
    sand3 = new Sand(370, 220);
    sand4 = new Sand(370, 220);
    sand5 = new Sand(370, 220);
    sand6 = new Sand(370, 220);

    stone = new Stone(680,320,70,70);

    rubber1 = new Rubber(850, 350);

    hammer = new Hammer(100,100);

}

function draw(){
    background(bgImg);
    Engine.update(engine);

    stone.display();

    ground.display();

    rubber1.display();

    iron.display();  

    sand1.display();
    sand2.display();
    sand3.display();
    sand4.display();
    sand5.display(); 
    sand6.display();
    
    hammer.display();
}