//global variables that will store the toolbox colour palette
//and the helper functions
let c;
let toolbox = null;
let colourP = null;
let helpers = null;

let slider;
let circles = [];
let img;
let counter = 0;

function setup() {
  //create a canvas to fill the content div from index.html
  canvasContainer = select("#content");
  c = createCanvas(canvasContainer.size().width, canvasContainer.size().height);
  c.parent("content");
  pixelDensity(1);
  noSmooth();

  stampsPalette = document.getElementById("stamps");
  fillMenu = document.getElementById("fillMenu");

  //create helper functions and the colour palette
  helpers = new HelperFunctions();
  colourP = new ColourPalette();

  //create a toolbox for storing the tools
  toolbox = new Toolbox();

  //add the tools to the toolbox.
  toolbox.addTool(new FreehandTool());
  toolbox.addTool(new LineToTool());
  toolbox.addTool(new SprayCanTool());
  toolbox.addTool(new MirrorDrawTool());
  toolbox.addTool(new StampTool());
  toolbox.addTool(new shapesTool());
  toolbox.addTool(new fillTool());
  toolbox.addTool(new DraggableShapesCircle(mouseX, mouseY));
  toolbox.addTool(new DraggableShapesSquare(mouseX, mouseY));
  background(255);
  // registers a callback that gets called every time
  // a file that is dropped on the element has been loaded
  c.drop(gotFile);
  //reference: https://www.youtube.com/watch?v=587qclhguQg
  slider = createSlider(1, 20, 1);
  slider.parent('palette');
  slider.style('margin', "10px");
}

function draw() {
  if (img && counter == 0) {
    image(img, 0, 0, c.width, c.height);
    counter++;
  }
  //reset circles array after done using extension
  if(toolbox.selectedTool.name != "draggableShapesCircle") {
    toolbox.getDraggableCircle().circles = []
  }
  //reset squares array after done using extension
  if(toolbox.selectedTool.name != "draggableShapesSquare") {
    toolbox.getDraggableSquare().squares = []
  }
  if(toolbox.selectedTool.name == "stamp") {
    let palette = document.getElementById('stamps');
    palette.classList.remove('hidden');
    palette.classList.add('visible');
  } else {
    let palette = document.getElementById('stamps');
    palette.classList.remove('visible');
    palette.classList.add('hidden');
  }
  //call the draw function from the selected tool.
  //hasOwnProperty is a javascript function that tests
  //if an object contains a particular method or property
  //if there isn't a draw method the app will alert the user
  if (toolbox.selectedTool.hasOwnProperty("draw")) {
    toolbox.selectedTool.draw();
  } else {
    alert("it doesn't look like your tool has a draw method!");
  }
}

// reference: https://www.youtube.com/watch?v=o4UmGrPst_c
function gotFile(file) {
  counter = 0;
  //create an image using image data of file/picture dropped
  img = createImg(file.data);

  //don't show image dropped separately
  img.hide();
}

    //check to see if mouse on shape AND mouse button pressed
    function mousePressed() {
      if(toolbox.selectedTool.name == "draggableShapesCircle") {
        for (let i = 0; i < toolbox.getDraggableCircle().circles.length; i++) {
          toolbox.getDraggableCircle().circles[i].mousePressed();
        }
      }


      if(toolbox.selectedTool.name == "draggableShapesSquare") {
        for (let i = 0; i < toolbox.getDraggableSquare().squares.length; i++) {
          toolbox.getDraggableSquare().squares[i].mousePressed();
        }
      }
    }
    
    //check to see if mouse button released
    function mouseReleased() {
      if(toolbox.selectedTool.name == "draggableShapesCircle") {
      for (let i = 0; i < toolbox.getDraggableCircle().circles.length; i++) {
        toolbox.getDraggableCircle().circles[i].mouseReleased();
      }
    }


    if(toolbox.selectedTool.name == "draggableShapesSquare") {
      for (let i = 0; i < toolbox.getDraggableSquare().squares.length; i++) {
        toolbox.getDraggableSquare().squares[i].mouseReleased();
      }
    }
    }
    
    //check to see if mouse is moving with mouse button pressed
    function mouseDragged() {
      if(toolbox.selectedTool.name == "draggableShapesCircle") {
      for (let i = 0; i < toolbox.getDraggableCircle().circles.length; i++) {
        toolbox.getDraggableCircle().circles[i].mouseDragged();
      }
    }


    if(toolbox.selectedTool.name == "draggableShapesSquare") {
      for (let i = 0; i < toolbox.getDraggableSquare().squares.length; i++) {
        toolbox.getDraggableSquare().squares[i].mouseDragged();
      }
    }
    }