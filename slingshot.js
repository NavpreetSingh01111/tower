class SlingShot {
    constructor(bodyA, pointB) {
      var options = {
        bodyA: bodyA,
        pointB: pointB,
        stiffness: 1.2,
        length: 250,
      };
  
      this.pointB = pointB;
      this.singShot = Constraint.create(options);
      World.add(world, this.slingShot);
    }
    
    display() {
      if (this.slingShot.bodyA) {
        var pointA = this.slingShot.bodyA.position;
        var pointB = this.pointB;
        push();
  
        stroke(48, 22, 8);
        strokeWeight(3);
  
        line(pointB.x, pointB.y, pointA.x, pointA.y);
  
        pop();
      }
    }
  }
  