class Stone  {
    constructor(x,y){
        
            var options= { 
                isStatic: false,
                  restitution:0,
                  friction:1,
                  density:1.2
            }
      this.stone = loadImage("sprites/stone.png");
      this.body = Bodies.rectangle(x, y, 50, 50, options);
      
      World.add(world, this.body);
    }
    display(){
      
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      image(this.stone,25,545,50,50);
     translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      pop();
    }
  }
