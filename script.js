var yoff = 0;
let img;
function preload() {
  img = loadImage('./butterfly1.png');
}
function setup() {
createCanvas(window.innerWidth, window.innerHeight);
   colorMode(RGB,255);
background(0);
  //text("スワロウテイル", 300, 400);
 // font = loadFont(filePath);
// 加载TTF或者OTF格式的字体

//textFont(font, size);
// 设置字体字号
//textSize(20);
// 设置字号
}

function draw() {

 // text('スワロウテイル', 120, 550);
   //fill(120, 28, 37);
// font = loadFont();
// 加载TTF或者OTF格式的字体

//textFont(font, size);
// 设置字体字号

//textSize(size);
// 设置字号

//textAlign(horizontal, vertical);
// 水平: LEFT (默认), CENTER or RIGHT
// 垂直: TOP, BOTTOM, CENTER or BASELINE (默认)

//text("string", x, y);
//text("multiline string", x, y, boxwidth, boxheight);
  
  push();
    //textFont(,20);
  //background(0);
  translate(width / 2, height / 2);
 // stroke(231,232,233,10);
   stroke(10,52,100,10);
  //stroke(random(0,5),random(0,10),random(0,10),10);
   //fill(10,52,100,10);
  fill(231,233,232,10);
  //fill(random(0,5),random(0,10),random(0,10),10);
  strokeWeight(2);

  var da = PI / 200;
  var dx = 0.05;
  
  var xoff = 0;
 beginShape();
  //rotate(60);
 for (var a = 0; a <= TWO_PI; a += da) {
   var n = noise(xoff/1.6, yoff);
   var r = sin(2 * a) * map(n, 0, 1, 50, 300);
   var x = 2*r * cos(a);
   var y = 2*r * sin(a);
   if (a < PI) {
     xoff += dx;
   } else {
     xoff -= dx;
   }
   //point(x, y);
   vertex(x, y);
 }
 endShape();

 yoff += 0.015;

pop()
 image(img, 10,550,width,width/579*76);
}



