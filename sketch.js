const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var rubber,stone,iron;



function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    iron=new Iron(210,300,50,20);
    rubber=new Rubber(304,400,50);
    stone=new Stone(700,350,100,100);

}

function draw(){
    background("lightBlue");
    Engine.update(engine);

    stone.display(); 
    plane.display();
    hammer.display();
    iron.display();
    rubber.display();
   
 
}