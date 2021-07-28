function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 500); /// width and height
    canvas.position(560, 150); ///x and y 

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw() {
    background('#969A97');
    textSize(difference);
    fill('#FFE787');
    text('Peter', 50, 400);
}

function modelLoaded() {
    console.log('Posenet is Intialized')
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
    }
}
noseX = 0;
noseY = 0;
difference = 0;
rightWristX = 0;
leftWristX = 0;

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX = " + noseX + " noseY = " + noseY);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = leftWristX - rightWristX;
    }
}