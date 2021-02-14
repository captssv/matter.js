//NAMESPACING



const Engine = Matter.Engine;
const Bodies=Matter.Bodies;
const World= Matter.World;

var engine,world;
var land;


function setup(){
engine = Engine.create();
world = engine.world;
createCanvas(800,400)

var landoption = {
  isStatic:true,
}

land = Bodies.rectangle(400, 380, 800, 20,landoption);
World.add(world,land);

console.log(land);
console.log(land.position.x)
console.log(land.density)




}

function draw(){
  background(0);
  Engine.update(engine);

  fill("brown")
  rectMode(CENTER)
  rect(land.position.x,land.position.y,800,20)



}