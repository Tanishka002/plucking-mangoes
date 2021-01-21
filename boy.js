class Boy{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.image = loadImage("sprites/boy.png");
        this.pointB =pointB;
        this.boy = Constraint.create(options);
        World.add(world, this.boy);
    }
  
    fly(){
        this.boy.bodyA = null;
    }
  
   display(){
    image(this.image,0,0);
     if(this.boy.bodyA){
        strokeWeight(4);
        var pointA = this.boy.bodyA.position;
        var pointB = this.pointB;
        line(pointA.x, pointA.y, pointB.x, pointB.y);
     }
    }
}
