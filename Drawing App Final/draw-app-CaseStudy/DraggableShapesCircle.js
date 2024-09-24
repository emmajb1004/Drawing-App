function DraggableShapesCircle() {
  this.icon = "assets/draggableShapesCircle.png";
  this.name = "draggableShapesCircle";
  this.circles = [];

     this.draw = function() {
      this.menu();
      //Updates the display window with the data in the pixels[] array
      updatePixels();
      //when space bar is pressed push a Circle into the circles array so can be drawn
      if(keyIsPressed && key == " ") {
        stroke(0);
        this.circles.push(new Circle(mouseX,mouseY));
      }
      //go through circles in circles array and draw circles
      for (let i = 0; i < this.circles.length; i++) {
          this.circles[i].draw();
      }
    }
    //Loads the pixel data for the display window into the pixels[] array
    loadPixels();

    //create description of extension in .options section of html
    this.menu = function() {
      select(".options").html("Draggable Circles: Create circles by pressing space bar when mouse is positioned where circle is wanted. Drag circles around to test out different spots. Circles will be locked into place after leaving extension");
      let menu = select(".options");
      menu.style("font-size", "30px");
      menu.style("padding-left", "50px");
    }
  }

