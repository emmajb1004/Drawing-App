function DraggableShapesSquare() {
    this.icon = "assets/draggableShapesSquare.png";
    this.name = "draggableShapesSquare";
    this.squares = [];

       this.draw = function() {
        this.menu();
        //Updates the display window with the data in the pixels[] array
        updatePixels();
        //when space bar is pressed push a Square into the squares array so can be drawn
        if(keyIsPressed && key == " ") {
          stroke(0);
          this.squares.push(new Square(mouseX,mouseY));
        }
        //go through squares in squares array and draw squares
        for (let i = 0; i < this.squares.length; i++) {
            this.squares[i].draw();
        }
      }
      //Loads the pixel data for the display window into the pixels[] array
      loadPixels();

      //create description of extension in .options section of html
      this.menu = function() {
        select(".options").html("Draggable Squares: Create squares by pressing space bar when mouse is positioned where square is wanted. Drag squares around to test out different spots. Squares will be locked into place after leaving extension");
        let menu = select(".options");
        menu.style("font-size", "30px");
        menu.style("padding-left", "50px");
    }
  }
      