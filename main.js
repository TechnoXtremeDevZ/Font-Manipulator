function setup() {
    canvas = createCanvas(500, 500);
    canvas.position(700, 150);

    video = createCapture(VIDEO);
    video.size(600, 600);
    
    poseNet = ml5.poseNet(video, modelLoaded);

    posenet.on("pose", gotPoses);
}

function draw() {
    background("#e3e3e3");
}

function modelLoaded(){
    console.log("Model is Loaded.");
}

function gotPoses(results) {
    if(results.length > 0){
        console.log(results);
    }
}
