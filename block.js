
class Block {
    constructor(x, y, width, height,color) {
      var options = {
          'restitution':0.8,
          'friction':0.3,
          'density':1.0,
          'isStatic':false
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.color = color

      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle 
      var color = this.color
      push()
      translate(pos.x,pos.y)
      rotate(angle)
      rectMode(CENTER);
      fill(color);
      rect(0,0, this.width, this.height);
      pop();
    }
  };