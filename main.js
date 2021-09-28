status1 = "";

function setup(){
    canvas = createCanvas(400, 300);
    canvas.position(445, 270);
    video = createCapture(VIDEO);
    video.size(400, 300);
    video.hide();
}

function draw(){
    image(video, 0, 0, 400, 300);
}

function start(){
    objectDetector = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
    object_name = document.getElementById("object_name").value;
}

function modelLoaded(){
    console.log("Model Loaded");
    status1 = true;
}