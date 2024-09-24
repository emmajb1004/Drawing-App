function fillTool() {
  this.icon = "assets/fillTool.jpg";
  this.name = "fillTool";


this.draw = function() {
  this.menu();
  if(keyIsPressed && key == " "){
    this.floodFill(createVector(mouseX, mouseY), [random(255), random(255), random(255), 255]);
  }
}


// a is color, b is seedColor
var arrayEquals = function(a, b) {
  return (
    // determines whether the passed values are arrays and are same length as each other
    Array.isArray(a) &&
    Array.isArray(b) &&
    a.length === b.length &&
    // every() tests whether all elements in the array pass
    // the test implemented by provided function
    // reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
    //compare if each value of a is equal to the value of b
    //https://flexiple.com/javascript/javascript-array-equality/
    a.every((val, index) => val === b[index])
  );
}

// has the coloring effect spread to surrounding pixels if matches color conditions
this.expandToNeighbours= function(queue, current) {
  x = current.x;
  y = current.y;

  //creating a vector for left, right, up, down from starting point(current.x and current.y)
  if (x - 1 > 0) {
    queue.push(createVector(x - 1, y));
  }

  if (x + 1 < width) {
    queue.push(createVector(x + 1, y));
  }

  if (y - 1 > 0) {
    queue.push(createVector(x, y - 1));
  }

  if (y + 1 < height) {
    queue.push(createVector(x, y + 1));
  }

  return queue;
}

// seed is createVector(mouseX, mouseY)
// fillColor is a random red value, 0 green, 0 blue, full alpha
this.floodFill = function(seed, fillColor) {
  if(navigator.userAgent.includes('Chrome')) {
  // https://www.educative.io/answers/how-to-find-the-users-browser-name-using-javascript
  // Loads the pixel data for the display window into the pixels[] array
  loadPixels();
  //the width times how many rows down plus the remaining x
  // multiply by four because four bytes per pixel
  // reference: https://www.youtube.com/watch?v=a7qCVxq-dWE
  // index = 4 * (c.width * seed.y + seed.x + c.width/2);
  index = 4 * (c.width * seed.y + seed.x);
  console.log(seed.y, seed.x);
  console.log(width, windowWidth);
  seedColor = [
    // red
    pixels[index],
    // green
    pixels[index + 1],
    // blue
    pixels[index + 2],
    // alpha
    pixels[index + 3],
  ];

  // array of seed values
  // seed is createVector(mouseX, mouseY)
  let queue = [];
  queue.push(seed);

  // runs the loop until the queue array is empty
  while (queue.length) {
    // removes the first item of the queue array, changes the original array, returns the shifted element
    let current = queue.shift();
    //the width times how many rows down plus the remaining x
    // multiply by four because four bytes per pixel
    // reference: https://www.youtube.com/watch?v=a7qCVxq-dWE
    index = 4 * (c.width * current.y + current.x );
    let color = [
      // red
      pixels[index],
      // green
      pixels[index + 1],
      // blue
      pixels[index + 2],
      // alpha
      pixels[index + 3],
    ];

    //if the arrays of color and seedColor don't equal each other then go to next line
    if (!arrayEquals(color, seedColor)) {
      continue;
    }

    //go through every pixel in the pixels array and set the fillColor by going through that array
    for (let i = 0; i < 4; i++) {
      pixels[index + i] = fillColor[0 + i];
    }

    // stores the return value of expandToNeighbours in queue
    queue = this.expandToNeighbours(queue, current);
  }

  //Updates the display window with the data in the pixels[] array
  updatePixels();
} else {
    // Loads the pixel data for the display window into the pixels[] array
    loadPixels();
    //the width times how many rows down plus the remaining x
    // multiply by four because four bytes per pixel
    // reference: https://www.youtube.com/watch?v=a7qCVxq-dWE
    index = 4 * (c.width * seed.y + seed.x);
    console.log(seed.y, seed.x);
    console.log(width, windowWidth);
    seedColor = [
      // red
      pixels[index],
      // green
      pixels[index + 1],
      // blue
      pixels[index + 2],
      // alpha
      pixels[index + 3],
    ];
  
    // array of seed values
    // seed is createVector(mouseX, mouseY)
    let queue = [];
    queue.push(seed);
  
    // runs the loop until the queue array is empty
    while (queue.length) {
      // removes the first item of the queue array, changes the original array, returns the shifted element
      let current = queue.shift();
      //the width times how many rows down plus the remaining x
      // multiply by four because four bytes per pixel
      // reference: https://www.youtube.com/watch?v=a7qCVxq-dWE
      index = 4 * (c.width * current.y + current.x);
      let color = [
        // red
        pixels[index],
        // green
        pixels[index + 1],
        // blue
        pixels[index + 2],
        // alpha
        pixels[index + 3],
      ];
  
      //if the arrays of color and seedColor don't equal each other then go to next line
      if (!arrayEquals(color, seedColor)) {
        continue;
      }
  
      //go through every pixel in the pixels array and set the fillColor by going through that array
      for (let i = 0; i < 4; i++) {
        pixels[index + i] = fillColor[0 + i];
      }
  
      // stores the return value of expandToNeighbours in queue
      queue = this.expandToNeighbours(queue, current);
    }
  
    //Updates the display window with the data in the pixels[] array
    updatePixels();
}
}
  //create description of extension in .options section of html
  this.menu = function() {
    select(".options").html("Bucket Tool: Place mouse in shape you would like to color and press space bar");
    let menu = select(".options");
    menu.style("font-size", "30px");
    menu.style("padding-left", "50px");
} 
}