const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground1, ground2, ground3;
var box1, box2, box3, box4, box5, box6, box7, box8, box9;
var box10, box11, box12, box13, box14, box15, box16, box17, box18;
var slingshot, polygonimg, polygon;

function preload(){

  polygonimg = loadImage("polygon.png")



}



function setup() {
  engine = Engine.create();
  world = engine.world;
  
  createCanvas(1450, 700);



  
  
  




  ground1 = new Ground(width/2, 690, 1600, 20)
  ground2 = new Ground((width/4)+255, 255, 180, 10)
  ground3 = new Ground((width/4)+(width/2), 450, 180, 10)
  



  // stand 1
  box1 = new box(620, 155, 30, 40)
  box2 = new box(650, 195, 30, 40)
  box3 = new box(620, 195, 30, 40)
  box4 = new box(590, 195, 30, 40)
  box5 = new box(680, 235, 30, 40)
  box6 = new box(650, 235, 30, 40)
  box7 = new box(620, 235, 30, 40)
  box8 = new box(590, 235, 30, 40)
  box9 = new box(560, 235, 30, 40)




  

  // stand 2
  box10 = new box(1085, 350, 30, 40)
  box11 = new box(1115, 390, 30, 40)
  box12 = new box(1085, 390, 30, 40)
  box13 = new box(1055, 390, 30, 40)
  box14 = new box(1145, 430, 30, 40)
  box15 = new box(1115, 430, 30, 40)
  box16 = new box(1085, 430, 30, 40)
  box17 = new box(1055, 430, 30, 40)
  box18 = new box(1025, 430, 30, 40)

  polygon = Bodies.circle(250, 200, 20);
  World.add(world, polygon)

  slingshot = new SlingShot(this.polygon, {x: 300, y: 200})





}

function draw() {
  Engine.update(engine);
  background(247, 223, 178);
  drawSprites();

  ground1.display();
  ground2.display();
  ground3.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();



  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();

  
  slingshot.display();

  imageMode(CENTER)
  image (polygonimg, polygon.position.x, polygon.position.y, 40,40)
}




function mouseDragged(){
  Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}


function keyPressed(){
  if(keyCode === 32){
      polygon.trajectory=[]
      Matter.Body.setPosition(this.polygon, {x:300, y:200})
     slingshot.attach(this.polygon);

  }
}
