class Particle{
    constructor(x,y){
      var options = {
        'restitution':0.8,
        'friction':1.0,
        'density':1.0,
    }
    this.body=Bodies.circle(x,y,this.r,options);
    World.add(world,this.body)
    }


    display(){
        var angle = this.body.angle;
       
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        ellipseMode(CENTER);
        fill((random(0,255),random(0,255),random(0,255)))
        ellipse(0,0,this.width,this.height);
        pop(); 
    }
}