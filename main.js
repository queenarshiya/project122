function preload() {
}

function setup() {
  canvas = createCanvas(640, 480);
  canvas.position(110, 250);
  video = createCapture(VIDEO);
  video.hide();

}

function draw() {
  image(video, 0, 0, 640, 480);

  circle(40, 40, 70,);
  fill("deeppink");

   circle(600, 40, 70,);
  fill("deeppink");

  circle(40, 430, 70,);
  fill("deeppink");

  circle(600, 430, 70,);
  fill("purple");

  ellipse(330, 46, 170, 55);
  fill("purple");

  ellipse(330, 430, 170, 55);
  fill("purple");

  ellipse(40, 240, 55, 170);
  fill("purple");

    ellipse(600, 240, 55, 170);
  fill("blue");

  rect(100, 20, 120, 40);
  fill("blue");

  rect(430, 20, 120, 40);
  fill("blue");

  rect(100, 410, 120, 40);
  fill("blue");

  rect(430, 410, 120, 40);
  fill("deeppink");



}

function take_snapshot(){    
  save('student_name.png');
}
