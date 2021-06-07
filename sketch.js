const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg , hour ;

function preload() {
   getBackgroundImg() 
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){
    if (backgroundImg)
background(backgroundImg);
     


    Engine.update(engine);

fill("black");
textSize(30);

   if (hour >= 12){
       text("TIME: "+hour%12+":00 PM",200,100);
   }
else if (hour== 00){
    text("TIME: 12AM",200,100);
}
else {
    text("TIME: "+hour%12+"AM",200,100);
}

}

async function getBackgroundImg(){
var response = await fetch("http://worldtimeapi.org/api/timezone/asia/kolkata")
  var JSONresponse = await response.json();
var datetime = JSONresponse.datetime  ;
hour = datetime.slice(11,13);  

if (hour >= 4 && hour < 6){
    bg = "sunrise1.png";
}
else if(hour >= 6 && hour < 8){
    bg = "sunrise2.png"; 
}
else if(hour >= 8 && hour < 11){
    bg = "sunrise3.png";
}
else if(hour >= 11 && hour < 13){
    bg = "sunrise4.png";
}
else if(hour >= 13 && hour < 15){
    bg = "sunrise5.png";
}
else if(hour >= 15 && hour < 17){
    bg = "sunrise6.png";
}
else if(hour >= 17 && hour < 18){
    bg = "sunset7.png";
}
else if(hour >= 18 && hour < 20){
    bg = "sunset8.png";
}
else if(hour >= 20 && hour < 23){
    bg = "sunset9.png";
}
else if(hour >= 23 && hour == 00){
    bg = "sunset10.png";
}
else if(hour >=00 && hour < 3){
    bg = "sunset4.png";
}
else if(hour >= 3 && hour < 4){
    bg = "sunset11.png";
}
else {
    bg = "sunset12.png"
}

backgroundImg = loadImage(bg);

}
