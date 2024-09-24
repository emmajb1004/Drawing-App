function Circle(x, y) {
   this.shapeX = x;
   this.shapeY = y;
   this.radius = 50;
   this.diameter = this.radius * 2;
   this.shapeMove = false;

    this.draw = function() {
        this.circle();
    }
   
    //draw circle
    this.circle = function() {
      strokeWeight(1);
      ellipse(this.shapeX, this.shapeY, this.diameter);
    }

    //check to see if clicking on shape and set shapeMove to true if so
   this.mousePressed = function() {
    let d = dist(mouseX, mouseY, this.shapeX, this.shapeY);
    if (d < this.radius) {
      this.shapeMove = true; 
    } else {
      this.shapeMove = false; 
    }
  }

  //shapeMove false when shape is no longer being clicked
  this.mouseReleased = function() {
    this.shapeMove = false;
  }

  //draw shape with mouseX and mouseY when mouseDragged and on shape so appearance of shape being dragged
  this.mouseDragged = function() {
    //shape x, y position is the mouse x, y position
    let d = dist(mouseX, mouseY, this.shapeX, this.shapeY);
    if (d < this.radius) {
        this.shapeX = mouseX;
        this.shapeY = mouseY;
    }
  }
}