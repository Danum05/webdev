const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");
let score = 0;
const scoreDisplay = document.getElementById("score"); 

function jump() {
  if (dino.classList != "jump") {
    dino.classList.add("jump");

    setTimeout(function () {
      dino.classList.remove("jump");
    }, 300);
  }
}

let isAlive = setInterval(function () {
  let dinoTop = parseInt(
    window.getComputedStyle(dino).getPropertyValue("top")
  );

  let cactusLeft = parseInt(
    window.getComputedStyle(cactus).getPropertyValue("left")
  );

  if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) {
    alert("Game Over!");
    score = 0;
  } else {
    score++; 
    scoreDisplay.textContent = "Score: " + score; 
  }
}, 10);

document.addEventListener("keydown", function (event) {
  if (event.key === " ") {
    jump();
  }
});
