var Engine = Matter.Engine,
  Render = Matter.Render,
  World = Matter.World,
  Runner = Matter.Runner,
  Bodies = Matter.Bodies,
  Composite = Matter.Composite;

var engine;
var runner;
var world;
var boxes = [];
var ground;

function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Matter.Engine.create();
  runner = Matter.Runner.create();
  world = engine.world;
  Matter.Runner.run(runner, engine);

  var options = {
    isStatic: true,
  };
  ground = Bodies.rectangle(width / 2, height, width, 100, options);
  World.add(world, ground);
}
function mouseDragged() {
  boxes.push(new Box(mouseX, mouseY, random(10, 30), random(10, 30)));
}
function draw() {
  background(51);
  for (var i = 0; i < boxes.length; i++) {
    boxes[i].show();
  }
}
