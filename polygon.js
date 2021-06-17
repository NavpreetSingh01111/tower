class polygon {
    constructor(x, y,radius,) {
      var options = { 
        density: 1, 
        };
  
      this.polygon = Bodies.circle(x, y, radius, options);
      this.radius= radius;
      this.radius = radius;
      World.add(world, this.polygon);
    }
  
    display() {
    var polygon
      push();
      translate(this.polygon.position.x, this.polygon.position.y);
      
      imageMode (CENTER)
      image(polygon_img,polygon.position.x,polygon.position.y,40,40)
      
      
      pop();
    }
  }