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
    image(this.image,0,500,250,250);
     if(this.boy.bodyA){
        var pointA = this.boy.bodyA.position;
        var pointB = this.pointB;
        stroke(48,22,8)
        //strokeWeight(7);
        line(pointA.x-20, pointA.y, pointB.x-10, pointB.y);
        }
     }
    }

