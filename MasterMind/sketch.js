// Based off of the game mastermind 

// Game board
background(255, 223, 219);
stroke(0, 0, 0);
strokeWeight(2);
fill(250, 173, 173);
rect(15, 1, 255, 397, 15);
rect(280, 1, 109, 397, 15);
for(var x = 45; x<270; x+=65) {
    for(var y = 25; y<395; y+=50) {
        noStroke();
        fill(250, 128, 114);
        ellipse(x, y, 40, 40);
    }
}
for(var x = 45; x<270; x+=65) {
    for(var y = 25; y<395; y+=50) {
        noFill();
        stroke(0, 0, 0, 15);
        strokeWeight(5);
        arc(x, y, 35, 35, 105, 305);
    }
}
for(var x = 300; x<380; x+=23) {
    for(var y = 25; y<395; y+=50) {
        noStroke();
        fill(250, 128, 114);
        ellipse(x, y, 15, 15);
    }
}
for(var x = 300; x<380; x+=23) {
    for(var y = 25; y<395; y+=50) {
        noFill();
        stroke(0, 0, 0, 15);
        strokeWeight(3);
        arc(x, y, 12, 12, 105, 305);
    }
}

// Random sequence
var coverY = 1;
var color1 = [0, 255];
var color2 = [0, 255];
var color3  = [0, 255];

var randomColor1a = round(random(0, 1));
var randomColor2a = round(random(0, 1));
var randomColor3a = round(random(0, 1));
var randomColor1b = round(random(0, 1));
var randomColor2b = round(random(0, 1));
var randomColor3b = round(random(0, 1));
var randomColor1c = round(random(0, 1));
var randomColor2c = round(random(0, 1));
var randomColor3c = round(random(0, 1));
var randomColor1d = round(random(0, 1));
var randomColor2d = round(random(0, 1));
var randomColor3d = round(random(0, 1));

if(randomColor1a===0 && randomColor2a===1) {
    randomColor3a=0;
}
if(randomColor1a===1 && randomColor3a===1) {
    randomColor2a=1;
}
if(randomColor1b===0 && randomColor2b===1) {
    randomColor3b=0;
}
if(randomColor1b===1 && randomColor3b===1) {
    randomColor2b=1;
}
if(randomColor1c===0 && randomColor2c===1) {
    randomColor3c=0;
}
if(randomColor1c===1 && randomColor3c===1) {
    randomColor2c=1;
}
if(randomColor1d===0 && randomColor2d===1) {
    randomColor3d=0;
}
if(randomColor1d===1 && randomColor3d===1) {
    randomColor2d=1;
}

stroke(0, 0, 0);
strokeWeight(1);
fill(color1[randomColor1a], color2[randomColor2a], color3[randomColor3a]);
ellipse(45, 25, 40, 40);
fill(color1[randomColor1b], color2[randomColor2b], color3[randomColor3b]);
ellipse(110, 25, 40, 40);
fill(color1[randomColor1c], color2[randomColor2c], color3[randomColor3c]);
ellipse(175, 25, 40, 40);
fill(color1[randomColor1d], color2[randomColor2d], color3[randomColor3d]);
ellipse(240, 25, 40, 40);
strokeWeight(2);
fill(250, 173, 173);
rect(15, coverY, 255, 50, 15);
textSize(50);
fill(250, 128, 114);
text("?", 30, coverY+43);
text("?", 95, coverY+43);
text("?", 160, coverY+43);
text("?", 225, coverY+43);

// Game markers
var colorClicker1 = 0;
var colorClicker2 = 0;
var colorClicker3 = 0;
var colorClicker4 = 0;

var tokenY = 375;
var numTokens = 0;
var guessSize = 50;

var currentColor1a = 0;
var currentColor2a = 0;
var currentColor3a = 0;
var currentColor1b = 0;
var currentColor2b = 0;
var currentColor3b = 0;
var currentColor1c = 0;
var currentColor2c = 0;
var currentColor3c = 0;
var currentColor1d = 0;
var currentColor2d = 0;
var currentColor3d = 0;

draw = function() {
    
    stroke(0, 0, 0);
    strokeWeight(8);
    line(0, tokenY, 18, tokenY);
    line(18, tokenY, 12, tokenY-5);
    line(18, tokenY, 12, tokenY+5);
    strokeWeight(2);

    var correction1 = function(y) {
        noStroke();
        fill(0, 0, 0);
        ellipse(300, y, 15, 15);
    
    };
    var correction2 = function(y) {
        noStroke();
        fill(255, 255, 255);
        ellipse(300, y, 15, 15);
    };
    var correction3 = function() {
    };
    var correction4 = function() {
    };

    mousePressed = function() {
        
        if(mouseX>25 && mouseX<65 && mouseY>tokenY-20 && mouseY<tokenY+20) {
            if(colorClicker1===0 || colorClicker1===0.5) {
                fill(255, 0, 0);
                colorClicker1+=0.5;
        }
            if(colorClicker1===1 || colorClicker1===1.5) {
                fill(255, 255, 0);
                colorClicker1+=0.5;
            }
            if(colorClicker1===2 || colorClicker1===2.5) {
                fill(0, 255, 0);
                colorClicker1+=0.5;
            }
            if(colorClicker1===3 || colorClicker1===3.5) {
                fill(0, 0, 255);
                colorClicker1+=0.5;
            }
            if(colorClicker1===4 || colorClicker1===4.5) {
                fill(0, 0, 0);
                colorClicker1+=0.5;
            }
            if(colorClicker1===5) {
                fill(255, 255, 255);
                colorClicker1-=5;
            }
            ellipse(45, tokenY, 40, 40);
            numTokens+=1;
    }
        if(mouseX>90 && mouseX<130 && mouseY>tokenY-20 && mouseY<tokenY+20) {
            if(colorClicker2===0 || colorClicker2===0.5) {
                fill(255, 0, 0);
                colorClicker2+=0.5;
            }
            if(colorClicker2===1 || colorClicker2===1.5) {
                fill(255, 255, 0);
                colorClicker2+=0.5;
            }
            if(colorClicker2===2 || colorClicker2===2.5) {
                fill(0, 255, 0);
                colorClicker2+=0.5;
            }
            if(colorClicker2===3 || colorClicker2===3.5) {
                fill(0, 0, 255);
                colorClicker2+=0.5;
            }
            if(colorClicker2===4 || colorClicker2===4.5) {
                fill(0, 0, 0);
                colorClicker2+=0.5;
            }
            if(colorClicker2===5) {
                fill(255, 255, 255);
                colorClicker2-=5;
            }
            ellipse(110, tokenY, 40, 40);
            numTokens+=1;
        }
        if(mouseX>155 && mouseX<195 && mouseY>tokenY-20 && mouseY<tokenY+20) {
            if(colorClicker3===0 || colorClicker3===0.5) {
                fill(255, 0, 0);
                colorClicker3+=0.5;
            }
            if(colorClicker3===1 || colorClicker3===1.5) {
                fill(255, 255, 0);
                colorClicker3+=0.5;
            }
            if(colorClicker3===2 || colorClicker3===2.5) {
                fill(0, 255, 0);
                colorClicker3+=0.5;
            }
            if(colorClicker3===3 || colorClicker3===3.5) {
                fill(0, 0, 255);
                colorClicker3+=0.5;
            }
            if(colorClicker3===4 || colorClicker3===4.5) {
                fill(0, 0, 0);
                colorClicker3+=0.5;
            }
            if(colorClicker3===5) {
                fill(255, 255, 255);
                colorClicker3-=5;
            }
            ellipse(175, tokenY, 40, 40);
            numTokens+=1;
        }
        if(mouseX>220 && mouseX<260 && mouseY>tokenY-20 && mouseY<tokenY+20) {
            if(colorClicker4===0 || colorClicker4===0.5) {
                fill(255, 0, 0);
                colorClicker4+=0.5;
            }
            if(colorClicker4===1 || colorClicker4===1.5) {
                fill(255, 255, 0);
                colorClicker4+=0.5;
            }
            if(colorClicker4===2 || colorClicker4===2.5) {
                fill(0, 255, 0);
                colorClicker4+=0.5;
            }
            if(colorClicker4===3 || colorClicker4===3.5) {
                fill(0, 0, 255);
                colorClicker4+=0.5;
            }
            if(colorClicker4===4 || colorClicker4===4.5) {
                fill(0, 0, 0);
                colorClicker4+=0.5;
            }
            if(colorClicker4===5) {
                fill(255, 255, 255);
                colorClicker4-=5;
            }
            ellipse(240, tokenY, 40, 40);
            numTokens+=1;
        }
        
        if(colorClicker1===0.5) {
            currentColor1a+=255;
            currentColor2a+=0;
            currentColor3a+=0;
        }
        if(colorClicker1===1.5) {
            currentColor1a+=255;
            currentColor2a+=255;
            currentColor3a+=0;
        }
        if(colorClicker1===2.5) {
            currentColor1a+=0;
            currentColor2a+=255;
            currentColor3a+=0;
        }
        if(colorClicker1===3.5) {
                currentColor1a+=0;
                currentColor2a+=0;
                currentColor3a+=255;
        }
        if(colorClicker1===4.5) {
                currentColor1a+=0;
                currentColor2a+=0;
                currentColor3a+=0;
        }
        if(colorClicker1===0) {
            currentColor1a+=255;
            currentColor2a+=255;
            currentColor3a+=255;
        }
    };

    keyPressed = function() {
        if(numTokens >= 4 && keyCode === 10) {
            correction1(tokenY);
            correction2(tokenY);
            tokenY-=50;
            numTokens-=4;
            colorClicker1=0;
            colorClicker2=0;
            colorClicker3=0;
            colorClicker4=0;
        }
    };
};
