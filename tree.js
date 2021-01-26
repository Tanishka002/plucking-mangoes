class Tree {
    constructor(x,y,width,height) {
        var options = {
            isStatic: false,
            restitution:0,
            friction:1,
            density:1.2
        }
        
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        this.image = loadImage("sprites/tree.png");
        World.add(world, this.body);
      }
      display(){
    image(this.image,425,200,500,500);
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    pop();
  }
};

      
    


