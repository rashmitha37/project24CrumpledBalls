class Paper{
    constructor(){
       var options={
           isStatic:false,
           restitution:1,
           friction:0.5,
           density:1.5
       }
      
      this.body=Bodies.circle(200, 480, 20,options);
      World.add(world, this.body);
   }

   display(){
       push();
       translate(this.body.position.x,this.body.position.y);
       ellipseMode(RADIUS);
       fill("blue");
       ellipse(0,0,20,20);
       pop();
   }
}