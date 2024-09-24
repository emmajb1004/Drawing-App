function StampTool() {
  this.icon = "assets/stamp.jpg";
  this.name = "stamp";
  this.menuDisplayed;
  let star = loadImage("Stamps/star.png");
  let boba = loadImage("Stamps/boba.png");
  let cat = loadImage("Stamps/cat.png");
  let dog = loadImage("Stamps/dog.png");
  let icecream = loadImage("Stamps/icecream.png");
  let heart = loadImage("Stamps/heart.png");
  let smile = loadImage("Stamps/smile.png");
  this.stamps = [star, boba, cat, dog, icecream, smile, heart];
  let stampSize = 36;

  this.selectedStamp = this.stamps[0];

  this.draw = function () {
    this.menu();
    if (mouseIsPressed) {
      let stampX = mouseX - stampSize / 2;
      let stampY = mouseY - stampSize / 2;
      image(this.selectedStamp, stampX, stampY, stampSize, stampSize);
    }
    this.chooseStamp();
    }
    
  this.chooseStamp = function() {
  for(let i = 0; i < this.stamps.length; i++) {
    if(keyIsPressed) {
      number = 49 + i;
      if(keyCode == +number) {
        //reference: https://www.freecodecamp.org/news/how-to-convert-a-string-to-a-number-in-javascript/#:~:text=The%20unary%20plus%20operator%20(%20%2B%20)%20will%20convert%20a%20string%20into,will%20go%20before%20the%20operand.&text=We%20can%20also%20use%20the,into%20a%20floating%20point%20number.&text=If%20the%20string%20value%20cannot,the%20result%20will%20be%20NaN%20.
        this.selectedStamp = this.stamps[i];
      }
    }
  }
}
//create description of extension in .options section of html
this.menu = function() {
  select(".options").html("Stamps: See stamp palette below for options");
  let menu = select(".options");
  menu.style("font-size", "30px");
  menu.style("padding-left", "50px");
}
}