//formatted into constructor function unassisted
function shapesTool() {
  this.icon = "assets/shapes.jpg";
  this.name = "shapes";

  let editButton;
  let finishButton;
  let editMode = false;
  let currentShape = [];

  noFill();
  loadPixels();
  editButton = createButton("Edit Shape");
  editButton.parent('palette');
  editButton.style('margin', "10px");
  editButton.mousePressed(function () {
    if (editMode) {
      editMode = false;
      editButton.html("Edit Shape");
    } else {
      editMode = true;
      editButton.html("Add Vertices");
    }
  });

  finishButton = createButton("Finish Shape");
  finishButton.parent('palette');
  finishButton.style('margin', "10px");

  finishButton.mousePressed(function () {
    editMode = false;
    draw();
    loadPixels();
    currentShape = [];
  });

  this.draw = function () {
    this.menu();
    noFill();
    updatePixels();
    if (this.mousePressOnCanvas(c) && mouseIsPressed) {
      if (!editMode) {
        currentShape.push({
          x: mouseX,
          y: mouseY,
        });
      } else {
        for (let i = 0; i < currentShape.length; i++) {
          if (dist(currentShape[i].x, currentShape[i].y, mouseX, mouseY) < 15) {
            currentShape[i].x = mouseX;
            currentShape[i].y = mouseY;
          }
        }
      }
    }

    beginShape();
    for (let i = 0; i < currentShape.length; i++) {
      vertex(currentShape[i].x, currentShape[i].y);
      if (editMode) {
        fill("red");
        ellipse(currentShape[i].x, currentShape[i].y, 10);
        noFill();
      }
    }
    endShape();
  };

  //makes sure mousePressed is on canvas to count vertex for drawing
  this.mousePressOnCanvas = function (canvas) {
    if (
      mouseX > canvas.elt.offsetLeft &&
      mouseX < canvas.elt.offsetLeft + canvas.width &&
      mouseY > canvas.elt.offsetTop &&
      mouseY < canvas.elt.offsetTop + canvas.height
    ) {
      return true;
    }
    return false;
  }
  //create description of extension in .options section of html
  this.menu = function() {
    select(".options").html("Editable Shapes: Draw your shape. If you want to edit the vertices and shape of what you've drawn, press edit shape button below. If you want to add more to the shape, press the add vertices button below that will appear when in edit shape mode. When done editing and adding to your drawing, press finish shape button below and your drawing is set.");
    let menu = select(".options");
    menu.style("font-size", "30px");
    menu.style("padding-left", "50px");
}
}
