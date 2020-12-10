var x = 0; //x coordinate of the ball at any instant
var y = 0; // y coordinate of the ball at any instant
var speedx = 3; //speed of the ball along the x axis
var speedy = 3; // speed of the ball along the y axis
let football;
let wall;

function setup() {

    createCanvas(windowWidth, windowHeight);
    background(300);
}

function preload() {
    // A method which will load all the stuff before hand i.e.,before running of the program it will load the stuff.
    football = loadImage('images/football.png');
    wall = loadImage('images/bricks.png');
}

function draw() {
    //logic part of the project 
    background(0);
    image(wall, 0, 0, windowWidth, windowHeight);
    stroke(255);
    strokeWeight(4);
    noFill();
    image(football, this.x, this.y, 70, 70);
    if (x > width - 7) {
        speedx = -(7 + random(0, 25));
    } else {
        if (x < 7) {
            speedx = 7 + random(0, 25);
        }
    }
    if (y > height - 7) {
        speedy = -(7 + random(0, 25));
    } else {
        if (y < 3) {
            speedy = 7 + random(0, 25);
        }
    }
    x = x + speedx;
    y = y + speedy;
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}