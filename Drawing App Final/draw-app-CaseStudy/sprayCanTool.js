SprayCanTool = function () {
  this.name = "sprayCanTool";
  this.icon = "assets/sprayCan.jpg";

  this.points = 13;
  this.spread = 10;

  this.draw = function () {
    this.menu();
    //if the mouse is pressed paint on the canvas
    //spread describes how far to spread the paint from the mouse pointer
    //points holds how many pixels of paint for each mouse press.
    if (mouseIsPressed) {
      let r = random(5, 10);
      if (mouseIsPressed) {
        for (let i = 0; i < this.points; i++) {
          strokeWeight(1);
          point(
            random(mouseX - this.spread, mouseX + this.spread),
            random(mouseY - this.spread, mouseY + this.spread)
          );
        }
      }
    }
  }
  //create description of extension in .options section of html
  this.menu = function() {
    select(".options").html("Spray Can");
  }
}
