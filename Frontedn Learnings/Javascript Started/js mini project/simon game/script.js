let h4 = document.querySelector("h4");
let lvlCounter = 1;
let score = 0;
let sequence = [];
let userIndex = 0;
let gameStarted = false;
let h3 = document.querySelector("h3");
let highScore = 0;
document.addEventListener("keypress", function () {
  if (!gameStarted) {
    resetGame();
    startLevel();
    gameStarted = true;
  }
});

function startLevel() {
  h4.innerText = `Level ${lvlCounter}`;
  userIndex = 0;

  // Add one new item to the sequence
  let next = Math.floor(Math.random() * 4) + 1;
  sequence.push(next);

  // Blink the newly added box
  let newBox = document.querySelector(`.item${next}`);
  newBox.classList.add("blink");
  setTimeout(() => newBox.classList.remove("blink"), 300);
}

document.querySelectorAll(".box").forEach((box) => {
  box.addEventListener("click", function () {
    if (gameStarted) {
      this.classList.add("blink");
      setTimeout(() => {
        this.classList.remove("blink");
      }, 300);
      let clickedNum = parseInt(this.classList[1].replace("item", ""));

      if (clickedNum === sequence[userIndex]) {
        userIndex++;
        if (userIndex === sequence.length) {
          score++;
          lvlCounter++;
          setTimeout(startLevel, 1000);
        }
      } else {
        gameOver();
      }
    }
  });
});

function gameOver() {
  document.body.classList.add("failScreen");
  setTimeout(() => document.body.classList.remove("failScreen"), 400);
  h4.innerText = `GAME OVER! Your score was ${score}`;
  let msg = document.createElement("p");
  msg.innerText = "Press any key to restart";
  h4.appendChild(msg);
  if (highScore < score) {
    document.querySelector("body").classList.add("goldenScreen");
    setTimeout(() => {
      document.querySelector("body").classList.remove("goldenScreen");
    }, 700);
    highScore = score;
    h3.innerText = `HighScore:${highScore}`;
  }
  gameStarted = false;
}

function resetGame() {
  sequence = [];
  score = 0;
  lvlCounter = 1;
  userIndex = 0;
  h4.innerText = "";
}
let toggleBtn = document.querySelector("span");
let icon = toggleBtn.querySelector("i");

toggleBtn.addEventListener("click", function () {
  // Toggle mode based on current icon class
  if (icon.classList.contains("off")) {
    // Switch to Night Mode
    toggleBtn.firstChild.textContent = "Night Mode ";
    icon.classList.remove("fa-toggle-off", "off");
    icon.classList.add("fa-toggle-on", "on");
    document.body.classList.remove("lightScreen");
    document.body.classList.add("darkScreen");
  } else {
    // Switch to Day Mode
    toggleBtn.firstChild.textContent = "Day Mode ";
    icon.classList.remove("fa-toggle-on", "on");
    icon.classList.add("fa-toggle-off", "off");
    document.body.classList.remove("darkScreen");
    document.body.classList.add("lightScreen");
  }
});
