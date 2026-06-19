function setup() {
  createCanvas(windowWidth, windowHeight);

  textAlign(CENTER, CENTER);
  textFont('monospace');
}

function draw() {
  background(5);

  // 배경 원 효과
  for (let i = 0; i < 15; i++) {
    noStroke();

    fill(0, 255, 170, 10);

    circle(
      width / 2,
      height / 2,
      250 + i * 30
    );
  }

  // 상단 문구
  fill(0, 255, 170);

  textSize(24);

  text("ACCESS GRANTED", width / 2, height / 2 - 120);

  // 메인 숫자
  fill(0, 255, 170);

  textSize(120);

  textStyle(BOLD);

  text("0424", width / 2, height / 2);

  // 하단 문구
  fill(0, 255, 170);

  textSize(18);

  text("SYSTEM ONLINE", width / 2, height / 2 + 120);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}