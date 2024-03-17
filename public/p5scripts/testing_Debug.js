function showXY() {
  let clickXY = true;
  prevClick = clickCount;
  clickCount += 1;
  if (clickXY) {
    console.log(`(${mouseX}, ${mouseY})`);
  }
}

function sceneFastChange_Debug() {
  if (keyIsDown(48)) {
    locationNum = 0;
  } else if (key == "1") {
    locationNum = 1;
  } else if (key == "2") {
    locationNum = 2;
  } else if (key == "3") {
    locationNum = 3;
  } else if (key == "4") {
    locationNum = 4;
  } else if (key == "5") {
    locationNum = 5;
  } else if (key == "6") {
    locationNum = 6;
  } else if (key == "7") {
    locationNum = 7;
  } else if (key == "8") {
    locationNum = 8;
  } else if (key == "9") {
    locationNum = 9;
  }
}

function sceneText_Debug() {
  push();

  function lineNo(input) {
    return 30 + 20 * input;
  }

  rectMode(CORNER);
  noStroke();
  fill(255, 255, 255, 100);
  rect(15, 10, 200, lineNo(0), 5);

  textAlign(LEFT);
  textSize(15);
  fill(50, 50, 50, 200);
  text(`locationNum [ ${locationNum} ]`, 20, lineNo(0));
  // text(`prevClick [ ${prevClick} ]`, 20, lineNo(1));
  // text(`clickCount [ ${clickCount} ]`, 20, lineNo(2));
  pop();
}

function nextScene_Debug(x1, x2, y1, y2, gotoNum) {
  push();
  rectMode(CORNERS);
  rect(x1, y1, x2, y2);

  textAlign(CENTER, CENTER);
  textSize(20);
  let cx = (x1 + x2) / 2;
  let cy = (y1 + y2) / 2;
  text("Enter", cx, cy);

  noStroke();

  if (mouseWithin(x1, x2, y1, y2) && mouseIsPressed) {
    locationNum = gotoNum;
  }

  pop();
}

function showHintDia_Debug(x1, y1, action) {
  let x2 = x1 + 100;
  let y2 = y1 + 100;

  push();

  stroke(255, 245, 150);
  noFill();
  strokeWeight(10);

  rectMode(CORNERS);
  rect(x1, y1, x2, y2);

  noStroke();

  if (mouseWithin(x1, x2, y1, y2)) {
    action();
  }

  pop();
}

function allDebugFunction() {
  // sceneFastChange_Debug();
  // sceneText_Debug();
  
  // selectSectionGoto(740, 974, 387, 436, 1);
  
  // nextScene(450, 550, 355, 485, 1);
  
  // showHintDia(150, 130, () => kitchen_obs_pot.display());
  // showHintDia(25, 705, () => attic_obs_bear.display())
  
  // attic_obs_bear.display()
  
  // console.log(dia_attic_talk[4].emotion)
}
