song  = "";

function setup(){
    canvas = createCanvas(600 , 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video , 0 , 0 , 600 , 500);
}

function preload(){
    song1 = loadSound("Believer---Imagine-Dragons-(PagalWorld).mp3");
    song2 = loadSound("Let Me Down Slowly_192(PagalWorld.com.se).mp3");
}