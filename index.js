let score = 0;
let scoreBoard = document.getElementById("score");

let allHoles = document.getElementsByClassName("hole");

let randomHole;

function toggleMole() {
  randomHole = Math.floor(Math.random() * allHoles.length);
  allHoles[randomHole].classList.toggle("mole");
}

function whackMole(tapHole) {
  if (tapHole.target.matches(".mole")) {
    tapHole.target.classList.toggle("mole"); //Doesnt allow multiple scores off one target
    score += 1;
    scoreBoard.innerText = score;
  }
}

setInterval(toggleMole, 400);

let gameArea = document.getElementById("whack-a-mole");
gameArea.addEventListener("click", whackMole);
