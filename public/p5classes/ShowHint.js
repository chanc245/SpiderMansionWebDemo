class ShowHint {
  constructor(
    enterX1,
    enterX2,
    enterY1,
    enterY2,
    img,
    exitX1,
    exitX2,
    exitY1,
    exitY2
  ) {
    this.imgX = 0;
    this.imgY = 0;

    this.enterX1 = enterX1;
    this.enterY1 = enterY1;
    this.enterX2 = enterX2;
    this.enterY2 = enterY2;

    this.exitX1 = exitX1;
    this.exitY1 = exitY1;
    this.exitX2 = exitX2;
    this.exitY2 = exitY2;

    this.img = img;
    this.visible = false;
  }

  display() {
    if (
      mouseX > this.enterX1 &&
      mouseX < this.enterX2 &&
      mouseY > this.enterY1 &&
      mouseY < this.enterY2 &&
      mouseIsPressed
    ) {
      this.visible = true;
    }

    if (this.visible) {
      image(this.img, this.imgX, this.imgY);
    }
  }

  exit() {
    if (
      mouseX > this.exitX1 &&
      mouseX < this.exitX2 &&
      mouseY > this.exitY1 &&
      mouseY < this.exitY2 &&
      mouseIsPressed
    ) {
      this.visible = false;
    }
  }
}
