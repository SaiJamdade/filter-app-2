function preload(){
}

function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCaptured(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on("pose", gotPoses);
}

function modelLoaded(){
    console.log("PoseNet Is Initialized");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        console.log("hat x ="+results[0].pose.hat.x);
        console.log("hat y ="+results[0].pose.hat.y);
    }
}

function draw(){
    image(video,0,0,300,300);
}

function take_snapshot(){
    save('SnapshotImage.png');
}