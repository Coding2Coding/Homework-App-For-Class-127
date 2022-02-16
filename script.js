var song2 = "";
var song4 = "";

function preload() {
    song2 = loadSound("music.mp3");
    song4 = loadSound("music2.mp3");
}

function setup() {
    canvas = createCanvas(400, 400);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 0, 0, 400, 400);
}