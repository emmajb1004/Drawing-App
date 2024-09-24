function FreehandTool() {
  //set an icon and a name for the object
  this.icon = "assets/freehand.jpg";
  this.name = "freehand";

  //to smoothly draw we'll draw a line from the previous mouse location
  //to the current mouse location. The following values store
  //the locations from the last frame. They are -1 to start with because
  //we haven't started drawing yet.
  let previousMouseX = -1;
  let previousMouseY = -1;

  this.draw = function () {
    this.menu();
    //unassisted code
    strokeWeight(slider.value());
    //end unassisted code
    //if the mouse is pressed
    if (mouseIsPressed) {
      //check if they previousX and Y are -1. set them to the current
      //mouse X and Y if they are.
      if (previousMouseX == -1) {
        previousMouseX = mouseX;
        previousMouseY = mouseY;
      }
      //if we already have values for previousX and Y we can draw a line from
      //there to the current mouse location
      else {
        line(previousMouseX, previousMouseY, mouseX, mouseY);
        previousMouseX = mouseX;
        previousMouseY = mouseY;
      }
    }
    //if the user has released the mouse we want to set the previousMouse values
    //back to -1.
    //try and comment out these lines and see what happens!
    else {
      previousMouseX = -1;
      previousMouseY = -1;
    }
  }
  //create description of extension in .options section of html
  this.menu = function() {
    select(".options").html("Free Draw: Use slider below to change size of line");
    let menu = select(".options");
    menu.style("font-size", "30px");
    menu.style("padding-left", "50px");
  }
}
