class DialogueBox {
  constructor(texts) {
    this.boxX = 62;
    this.boxY = 575;

    this.textX = 115;
    this.textY = 620;

    this.nameX = 205;
    this.nameY = 580;

    //box img size
    this.width = 900 * imgCom;
    this.height = 185 * imgCom;

    this.textType = 0;
    this.speaker = "";
    this.currentEmotion = null;
    this.texts = ``;

    this.allText = texts;

    this.currentIndex = 0;

    this.isActive = true;

    this.checkStatus();
  }

  display() {
    this.checkStatus();

    this.displayEmotion();
    this.displayText();
  }

  displayEmotion() {
    if (this.currentEmotion != null) {
      if (this.currentEmotion == "ara_2nor0") this.currentEmotion = ara_2nor0;
      if (this.currentEmotion == "ara_2nor1") this.currentEmotion = ara_2nor1;
      if (this.currentEmotion == "ara_2smi0") this.currentEmotion = ara_2smi0;
      if (this.currentEmotion == "ara_2smi1") this.currentEmotion = ara_2smi1;
      if (this.currentEmotion == "ara_2cur0") this.currentEmotion = ara_2cur0;
      if (this.currentEmotion == "ara_2ser0") this.currentEmotion = ara_2ser0;
      if (this.currentEmotion == "ara_3nor0") this.currentEmotion = ara_3nor0;
      if (this.currentEmotion == "ara_3smi0") this.currentEmotion = ara_3smi0;

      image(this.currentEmotion, 0, 50, chW * imgCom, chH * imgCom);
    }
  }

  displayText() {
    if (!this.isActive) return;

    push();
    image(this.boxType(), this.boxX, this.boxY, this.width, this.height);

    fill(255);
    textSize(24);
    textAlign(LEFT, TOP);
    text(this.texts, this.textX, this.textY, 790, 130);
    text(this.speaker, this.nameX, this.nameY, 50, 30);

    pop();
  }

  checkLocationChange() {
    // in what scene after playing all dialogue change location
    if (locationNum == 3 || locationNum == 5 || locationNum == 7) locationNum++;

    if (locationNum == 1) showEnter = true;
  }

  checkStatus() {
    if (this.currentIndex < this.allText.length) {
      let currentEntry = this.allText[this.currentIndex];

      this.textType = currentEntry.textType;
      this.speaker = currentEntry.name;
      this.currentEmotion = currentEntry.emotion;
      this.texts = currentEntry.texts;
    } else {
      this.isActive = false;
    }
  }

  boxType() {
    if (this.textType == 1) return dia_UI;
    return des_UI;
  }

  advance() {
    if (this.currentIndex < this.allText.length - 1) {
      this.currentIndex++;
      this.checkStatus();
    } else {
      this.isActive = false;
      this.checkLocationChange();
    }
  }
}
