const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint= Matter.Constraint;

var engine, world;
var particles=[];
var plinkos=[];
var divisions=[]
var ground;
var divisionHeight=300;
var ground;


function setup() {
  createCanvas(800,800);
  engine = Engine.create();
  world = engine.world;

  for(var k=0;k<=100;k=k+80){
    divisions.push(new Division(k,height-divisionHeight/2,10,divisionHeight))
  }

  for(var k=0;k<=200;k=k+80){
    divisions.push(new Division(k,height-divisionHeight/2,10,divisionHeight))
  }
  for(var k=0;k<=300;k=k+80){
    divisions.push(new Division(k,height-divisionHeight/2,10,divisionHeight))
  }
  for(var k=0;k<=400;k=k+80){
    divisions.push(new Division(k,height-divisionHeight/2,10,divisionHeight))
  }
  for(var k=0;k<=500;k=k+80){
    divisions.push(new Division(k,height-divisionHeight/2,10,divisionHeight))
  }
  for(var k=0;k<=600;k=k+80){
    divisions.push(new Division(k,height-divisionHeight/2,10,divisionHeight))
  }
  for(var k=0;k<=700;k=k+80){
    divisions.push(new Division(k,height-divisionHeight/2,10,divisionHeight))
  }
  for(var k=0;k<=800;k=k+80){
    divisions.push(new Division(k,height-divisionHeight/2,10,divisionHeight))
  }

  ground=createSprite(400,800,1000,20);

  for(var j=0; j <=50; j=j+50){
    plinkos.push(new Plinko(j,75))
    }

}

function draw() {
  background("black");  
  Engine.update(engine);

  for(var k=0;k<divisions.length;k++){
    divisions[k].display();
  }

  for(var j=0;j<plinkos.length;j++){
    plinkos[j].display();
  }
 
  drawSprites();

}