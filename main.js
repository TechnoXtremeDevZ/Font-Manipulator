var nose_x = 0;
var nose_y = 0;
var leftWrist = 0;
var rightWrist = 0;
var FontSize = 0;

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
    fill("black");
    stroke("black");
    
    textSize(FontSize);
    text("Franklin Gothic Medium");
    document.getElementById("fontm").innerHTML = "Size of text: " + Math.floor(FontSize);
}

function modelLoaded(){
    console.log("Model is Loaded.");
}

function gotPoses(results) {
    if(results.length > 0){
        console.log(results);
        
        nose_x = results[0].pose.nose.x;
        nose_y = results[0].pose.nose.y;
        leftWrist = results[0].pose.leftWrist.x;
        rightWrist = results[0].pose.rightWrist.y;
        FontSize = leftWrist - rightWrist;
    }
}
