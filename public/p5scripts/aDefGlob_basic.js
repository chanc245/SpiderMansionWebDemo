let imgCom = 1; //image srink compensation
let bgW = 1024; //background 4:3 width
let bgH = 768; //background 4:3 height

let chW = 1024;
let chH = 1096; //Character img hight

let locationNum = 0; //scene number

let shaCom = 10; //shadow compensation (original color - shaCom)

let interactKey = "/";

//CLICK COUNTS
let clickCount = 0;
let prevClick;

function mouseWithin(x1, x2, y1, y2) {
  if (mouseX > x1 && mouseX < x2 && mouseY > y1 && mouseY < y2) {
    return true;
  } else {
    return false;
  }
}

let showEnter = false;

let ansInput;
