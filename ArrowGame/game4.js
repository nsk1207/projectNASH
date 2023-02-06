function setup() {
    createCanvas(600, 600);
  }

// Y - position variables
var y1 = -580;
var y2 = -480;
var y3 = -380;
var y4 = -280;
var y5 = -180;
var y6 = -80;

// Arrow type variables
var type1 = random(0, 4);
var type2 = random(0, 4);
var type3 = random(0, 4);
var type4 = random(0, 4);
var type5 = random(0, 4);
var type6 = random(0, 4);

// Scoring
var points = 0;
var outline = [0, 0, 0];

draw = function() {
    
  background(134, 190, 227);

  var outline1 = stroke(0, 0, 0);

  // Game setup
  stroke(0, 0, 0);
  strokeWeight(5);
  line(150, 0, 150, 600);
  line(300, 0, 300, 600);
  line(450, 0, 450, 600);
  strokeWeight(90);
  line(0, 540, 600, 540);
  fill(134, 190, 227);
  strokeWeight(5);
  rect(10, 10, 50, 50, 10);
  fill(0, 0, 0);
  textSize(30);
  text(points, 20, 46);
  

  // Up, right, down, and left arrows
  var up = function(y) {
    stroke(outline[0], outline[1], outline[2]);
    strokeWeight(30);
    noFill();
    line(75, y, 75, y + 55);
    line(75, y, 55, y + 20);
    line(75, y, 95, y + 20);
    stroke(127, 99, 219);
    strokeWeight(20);
    noFill();
    line(75, y, 75, y + 55);
    line(75, y, 55, y + 20);
    line(75, y, 95, y + 20);
  };

  var right = function(y) {
    stroke(0, 0, 0);
    strokeWeight(30);
    noFill();
    line(192, y + 27, 252, y + 27);
    line(252, y + 27, 232, y + 47);
    line(252, y + 27, 232, y + 07);
    stroke(146, 214, 107);
    strokeWeight(20);
    noFill();
    line(192, y + 27, 252, y + 27);
    line(252, y + 27, 232, y + 47);
    line(252, y + 27, 232, y + 07);
  };

  var down = function(y) {
    stroke(0, 0, 0);
    strokeWeight(30);
    noFill();
    line(375, y, 375, y + 55);
    line(375, y + 55, 355, y + 35);
    line(375, y + 55, 395, y + 35);
    stroke(219, 175, 210);
    strokeWeight(20);
    noFill();
    line(375, y, 375, y + 55);
    line(375, y + 55, 355, y + 35);
    line(375, y + 55, 395, y + 35);
  };

  var left = function(y) {
    stroke(0, 0, 0);
    strokeWeight(30);
    noFill();
    line(492, y + 27, 552, y + 27);
    line(492, y + 27, 512, y + 47);
    line(492, y + 27, 512, y + 07);
    stroke(255, 204, 0);
    strokeWeight(20);
    noFill();
    line(492, y + 27, 552, y + 27);
    line(492, y + 27, 512, y + 47);
    line(492, y + 27, 512, y + 07);
  };

  // Random arrows at 1st y-position
  if(type1 <= 1) {
    up(y1);
    keyPressed = function() {
        if(keyCode === 38 && y1 > 495 && y1 < 585) {
            points += 1;
            outline = [255, 255, 255];

        }
    };
  }
  if(type1 > 1 && type1 <= 2) {
    right(y1);
    up(y1);
    keyPressed = function() {
        if(keyCode === 39 && y1 > 495 && y1 < 585) {
            points += 1;
            outline = [255, 255, 255];

        }
    };
  }
  if(type1 > 2 && type1 <= 3) {
    down(y1);
  }
  if(type1 > 3 && type1 <= 4) {
    left(y1);
  }

  // Random arrows at 2nd y-position
  if(type2 <= 1) {
    up(y2);
    keyPressed = function() {
        if(keyCode === 38 && y2 > 495 && y2 < 585) {
            points += 1;
            outline = [255, 255, 255];

        }
    };
  }
  if(type2 > 1 && type2 <= 2) {
    right(y2);
    keyPressed = function() {
        if(keyCode === 39 && y2 > 495 && y2 < 585) {
            points += 1;
            outline = [255, 255, 255];

        }
    };
  }
  if(type2 > 2 && type2 <= 3) {
    down(y2);
  }
  if(type2 > 3 && type2 <= 4) {
    left(y2);
  }

  // Random arrows at 3rd y-position
  if(type3 <= 1) {
    up(y1);
    keyPressed = function() {
        if(keyCode === 38 && y3 > 495 && y3 < 585) {
            points += 1;
            outline = [255, 255, 255];

        }
    };
  }
  if(type3 > 1 && type3 <= 2) {
    right(y3);
    keyPressed = function() {
        if(keyCode === 39 && y3 > 495 && y3 < 585) {
            points += 1;
            outline = [255, 255, 255];

        }
    };
  }
  if(type3 > 2 && type3 <= 3) {
    down(y1);
  }
  if(type3 > 3 && type3 <= 4) {
    left(y1);
  }

  // Random arrows at 4th y-position
  if(type4 <= 1) {
    up(y4);
    keyPressed = function() {
        if(keyCode === 38 && y4 > 495 && y4 < 585) {
            points += 1;
            outline = [255, 255, 255];

        }
    };
  }
  if(type4 > 1 && type4 <= 2) {
    right(y4);
    keyPressed = function() {
        if(keyCode === 39 && y4 > 495 && y4 < 585) {
            points += 1;
            outline = [255, 255, 255];

        }
    };
  }
  if(type4 > 2 && type4 <= 3) {
    down(y4);
  }
  if(type4 > 3 && type4 <= 4) {
    left(y4);
  }

  // Random arrows at 5th y-position
  if(type5 <= 1) {
    up(y1);
    keyPressed = function() {
        if(keyCode === 38 && y5 > 495 && y5 < 585) {
            points += 1;
            outline = [255, 255, 255];

        }
    };
  }
  if(type5 > 1 && type5 <= 2) {
    right(y5);
    keyPressed = function() {
        if(keyCode === 39 && y5 > 495 && y5 < 585) {
            points += 1;
            outline = [255, 255, 255];

        }
    };
  }
  if(type5 > 2 && type5 <= 3) {
    down(y5);
  }
  if(type5 > 3 && type5 <= 4) {
    left(y5);
  }

  // Random arrows at 6th y-position
  if(type6 <= 1) {
    up(y6);
    keyPressed = function() {
        if(keyCode === 38 && y6 > 495 && y6 < 585) {
            points += 1;
            outline = [255, 255, 255];

        }
    };
  }
  if(type6 > 1 && type6 <= 2) {
    right(y6);
    keyPressed = function() {
        if(keyCode === 39 && y6 > 495 && y6 < 585) {
            points += 1;
            outline = [255, 255, 255];

        }
    };
  }
  if(type6 > 2 && type6 <= 3) {
    down(y6);
  }
  if(type6 > 3 && type6 <= 4) {
    left(y6);
  }

  // Arrow movement
  if(y1 < 700) {
    y1 += 3;
  }
  if(y2 < 700) {
    y2 += 3;
  }
  if(y3 < 700) {
    y3 += 3;
  }
  if(y4 < 700) {
    y4 += 3;
  }
  if(y5 < 700) {
    y5 += 3;
  }
  if(y6 < 700) {
    y6 += 3;
  }

  // Arrow repeat sequence
  if(y1 > 680) {
    y1 -= 700;
    outline = [0, 0, 0];
  }
  if(y2 > 680) {
    y2 -= 700;
    outline = [0, 0, 0];
  }
  if(y3 > 680) {
    y3 -= 700;
    outline = [0, 0, 0];
  }
  if(y4 > 680) {
    y4 -= 700;
    outline = [0, 0, 0];
  }
  if(y5 > 680) {
    y5 -= 700;
    outline = [0, 0, 0];
  }
  if(y6 > 680) {
    y6 -= 700;
    outline = [0, 0, 0];
  }

};