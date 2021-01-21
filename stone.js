class Stone  {
    constructor(x,y){
        
            var options= { 
                isStatic: false,
                  restitution:0,
                  friction:1,
                  density:1.2
            }
      this.image = loadImage("sprites/stone.png");
      this.body = Bodies.rectangle(x, y, 50, 50, options);
      
      World.add(world, this.body);
    }
    display(){
      image(this.image,25,20);
      var pos =this.body.position;
      pos.x = mouseX;
      pos.y = mouseY;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      pop();
    }
  }
