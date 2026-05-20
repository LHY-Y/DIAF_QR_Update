function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER, CENTER);
}

function draw() {
  background(10);

  // 배경 글로우
  for (let i = 0; i < 20; i++) {
    noStroke();
    fill(0, 255, 180, 8);
    circle(width / 2, height / 2, 300 + i * 15);
  }

  // 상단 텍스트
  fill(180);
  textSize(28);
  text("ACCESS GRANTED", width / 2, height / 2 - 100);

  // 메인 코드
  fill(0, 255, 180);
  textSize(110);
  textStyle(BOLD);
  text("0424", width / 2, height / 2);

  // 하단 효과
  textSize(18);
  fill(120);
  text("SYSTEM ONLINE", width / 2, height / 2 + 100);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}