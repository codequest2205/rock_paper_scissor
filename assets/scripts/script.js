options = ["rock", "paper", "scissors"];

let option;
let com;
let player_score = 0;
let com_score = 0;

document.getElementById("rock").addEventListener("click", function () {
  option = 0;
});

document.getElementById("paper").addEventListener("click", function () {
  option = 1;
});

document.getElementById("scissors").addEventListener("click", function () {
  option = 2;
});

document.getElementById("rock").addEventListener("click", rockPaperScissor);
document.getElementById("paper").addEventListener("click", rockPaperScissor);
document.getElementById("scissors").addEventListener("click", rockPaperScissor);
document.getElementById("reset").addEventListener("click", function () {
  player_score = 0;
  com_score = 0;
  document.querySelector(".score").innerHTML = "0:0";
  document.querySelector(".com").innerHTML = "Computer";
  document.querySelector(".player").innerHTML = "Player";
});

function rockPaperScissor() {
  let min = 0;
  let max = 3;
  let com = Math.floor(Math.random() * (+max - +min)) + +min;
  document.querySelector(".com").innerHTML = "Computer:" + options[com];
  document.querySelector(".player").innerHTML = "Player:" + options[option];
  gameLogic(option, com);
}

function gameLogic(option, com) {
  if (option == 0) {
    if (com == 0) {
      document.querySelector(".score").innerHTML = "DRAW";
    } else if (com == 1) {
      com_score++;
      document.querySelector(".score").innerHTML =
        com_score + " : " + player_score;
    } else {
      player_score++;
      document.querySelector(".score").innerHTML =
        com_score + " : " + player_score;
    }
  } else if (option == 1) {
    if (com == 0) {
      player_score++;
      document.querySelector(".score").innerHTML =
        com_score + " : " + player_score;
    } else if (com == 1) {
      document.querySelector(".score").innerHTML = "DRAW";
    } else {
      com_score++;
      document.querySelector(".score").innerHTML =
        com_score + " : " + player_score;
    }
  } else {
    if (com == 0) {
      com_score++;
      document.querySelector(".score").innerHTML =
        com_score + " : " + player_score;
    } else if (com == 1) {
      player_score++;
      document.querySelector(".score").innerHTML =
        com_score + " : " + player_score;
    } else {
      document.querySelector(".score").innerHTML = "DRAW";
    }
  }
}
