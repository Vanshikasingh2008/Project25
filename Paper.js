class Paper {

   constructur(x,y,radius){
       var options = {
           isStatic: false,
           restitution: 0.3,
           friction: 0.5,
           density: 1.2 
       }
       this.body = Bodies.ellipse(100,432,15,options);
       //this.body.position.x = x;
       //this.body.position.y = y;
       this.body.radius = 15;
       //this.image = loadImage("paper.png");
       World.add(world, this.body);
   
   }
   
   display(){
      push();
       ellipseMode(RADIUS);
       fill("violet");
       ellipse(100,432,15);
       //imageMode(CENTER);
       //image(this.image,100,432,15); 
       pop(); 
   }
   
   }
