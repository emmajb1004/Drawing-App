function Square(x, y) {
    this.shapeX = x;
    this.shapeY = y;
    this.radius = 40;
    this.diameter = this.radius * 2;
    this.shapeMove = false;
 
     this.draw = function() {
         this.square();
     }
    
     this.square = function() {
      strokeWeight(1);
       rect(this.shapeX - this.radius, this.shapeY - this.radius, this.diameter, this.diameter);
     }
 
    this.mousePressed = function() {
     let d = dist(mouseX, mouseY, this.shapeX, this.shapeY);
     if (d < this.radius) {
       this.shapeMove = true; //mouse over shape and mouse pressed
     } else {
       this.shapeMove = false; //mouse over shape, can't move shape
     }
   }
 
   this.mouseReleased = function() {
     this.shapeMove = false;
   }
 
   this.mouseDragged = function() {
     //shape x, y position is the mouse x, y position
     let d = dist(mouseX, mouseY, this.shapeX, this.shapeY);
     if (d < this.radius) {
         this.shapeX = mouseX;
         this.shapeY = mouseY;
     }
   }
 }