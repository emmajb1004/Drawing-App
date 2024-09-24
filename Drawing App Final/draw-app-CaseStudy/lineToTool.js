function LineToTool() {
  this.icon = "assets/lineTo.jpg";
  this.name = "LineTo";

  let startMouseX = -1;
  let startMouseY = -1;
  let drawing = false;

  this.draw = function () {
    this.menu();
    if (mouseIsPressed) {
      // makes the beginning of the line where you have decided to draw
      if (startMouseX == -1) {
        startMouseX = mouseX;
        startMouseY = mouseY;
        drawing = true;
        loadPixels(); //calls loadPixels to make sure most recent changes are saved to pixel array
      } else {
        updatePixels(); //updates the display window with data in pixels array and makes into straight line with the startMouseX/Y values and mouseX, mouseY
        line(startMouseX, startMouseY, mouseX, mouseY);
      }
    } else if (drawing) {
      //returns back to non-drawing state
      drawing = false;
      startMouseX = -1;
      startMouseY = -1;
    }
  }
  //create description of extension in .options section of html
  this.menu = function() {
    select(".options").html("Line Tool: Draw perfectly straight lines");
    let menu = select(".options");
    menu.style("font-size", "30px");
    menu.style("padding-left", "50px");
  }
}
