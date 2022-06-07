noseX = 0;
noseY = 0;
leftWristX = 0;
rightWristX = 0; 
difference = 0;

function preload(){

}

function setup(){
    video = createCapture(VIDEO);
    video.size(550 , 500);
    video.position(20 , 150);

    canvas  = createCanvas(550 , 550);
    canvas.position(600,150);

    poseNet = ml5.poseNet(video , modelloaded);
    poseNet.on("pose" , gotposes)



}

function draw(){
    background("#25f59b");
    fill("#f5ef42");
    stroke("#0d0000");

    square(noseX , noseY , difference);

    document.getElementById("square_size").innerHTML = "The size of the square is  " +difference+ "px.";

}

function modelloaded(){
    console.log("Model is Loaded");
}

function gotposes(results){
    if(results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y; 
        console.log("nose x = " + noseX + "  nose y = " + noseY);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);

        console.log("Left Wrist x = " + leftWristX + "  Right Wrist x = " + rightWristX + "  difference = " + difference) ;


    }
}