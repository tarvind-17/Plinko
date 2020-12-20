const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;


var ground,world,engine;
var divArr=[];
var plinkoArr=[] ;
var partArr=[] ;




function setup() {
  createCanvas(480,650);

  engine=Engine.create();
  world=engine.world;

  ground=new Ground(240,640,480,20);

  for(var i=5;i<650;i+=78){  

    divArr.push(new Division(i,570));    

  }

  var dist=50;
  var start=10;

  // for(var i=start;i<650;i+=dist){   
  //   plinkoArr.push(new Plinko(i,100))    
  // }
  // for(var i=start+25;i<650;i+=dist){   
  //   plinkoArr.push(new Plinko(i,200))    
  // }
  
  // for(var i=start;i<650;i+=dist){   
  //   plinkoArr.push(new Plinko(i,300))    
  // }
  
  // for(var i=start+25;i<650;i+=dist){   
  //   plinkoArr.push(new Plinko(i,400))    
  // }

  for(var j=100;j<500;j+=100){  
    for(var i=start;i<650;i+=dist)
    {   
      plinkoArr.push(new Plinko(i,j))    
    }
    
  }
  
  


  
  

  

 
}

function draw() {
  background(0);  
  Engine.update(engine);

  
  for(var i=0;i<divArr.length;i++){   

    divArr[i].display();   

  }
  for(var i=0;i<plinkoArr.length;i++){   

    plinkoArr[i].display();   

  }

  if(frameCount%90===0){

    partArr.push(new Particle(random(100,300),0))


  }
  for(var i=0;i<partArr.length;i++){
    partArr[i].display();
  }
  
  

    

    

  
  

 

  ground.display();
}