function nextScene(x1, x2, y1, y2, gotoNum, textinput) {
  push();

  noStroke();

  //   image(scene1_Img, 0, 0, bgW * imgCom, bgH * imgCom);

  let imgW = x2 - x1;
  let imgH = y2 - y1;

  image(but_UI, x1, y1, imgW, imgH);

  // fill(255, 255, 255, 150);
  // rectMode(CORNERS);
  // rect(x1, y1, x2, y2);

  fill(255);
  textAlign(CENTER, CENTER);
  textSize(20);
  let cx = (x1 + x2) / 2;
  let cy = (y1 + y2) / 2 - 5;
  text(textinput, cx, cy);

  if (mouseWithin(x1, x2, y1, y2) && mouseIsPressed) {
    locationNum = gotoNum;
    // console.log(locationNum);
  }

  pop();
}

function showHintDia(x1, y1, action) {
  let x2 = x1 + 80;
  let y2 = y1 + 80;

  push();
  // rect(x1, y1, x2, y2);
  image(glowHint, x1, y1, 80, 80);

  if (mouseWithin(x1, x2, y1, y2)) {
    action();
  }

  pop();
}

function selectSectionGoto(x1, x2, y1, y2, goto) {
  push();
  if (mouseWithin(x1, x2, y1, y2)) {
    rectMode(CORNERS);
    stroke(255);
    strokeWeight(1);
    noFill();
    rect(x1, y1, x2, y2);

    if (mouseIsPressed) {
      locationNum = goto;
      // console.log(locationNum);
    }
  }
  pop();
}

function selectSectionGotoNoline(x1, x2, y1, y2, goto) {
  if (mouseWithin(x1, x2, y1, y2) && mouseIsPressed) {
    locationNum = goto;
    // console.log(locationNum);
  }
}

function selectSection(x1, x2, y1, y2) {
  push();
  if (mouseWithin(x1, x2, y1, y2)) {
    rectMode(CORNERS);
    stroke(255);
    strokeWeight(1);
    noFill();
    rect(x1, y1, x2, y2);
  }
  pop();
}
