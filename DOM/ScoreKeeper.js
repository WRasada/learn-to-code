var p1Button = document.querySelector("#p1");
var p2Button = document.getElementById("p2");
var resetButton = document.getElementById("reset");
var p1Display = document.querySelector(".p1Score");
var p2Display = document.querySelector(".p2Score");
var input = document.querySelector("input");
var score = document.querySelector(".score");
var gameOver = false;
var winingScore = 0;
var p1Score = 0;
var p2Score = 0;

p1Button.addEventListener("click", function(){
  if (!gameOver){
    p1Score++;
    if (p1Score === winningScore){
      p1Display.classList.add("green");
      p1Button.disabled = true;
      p1Display.textContent = p1Score;
      p2Button.disabled = true;
      gameOver = true;
    }
    p1Display.textContent = p1Score;
  }
});

p2Button.addEventListener("click", function(){
  if (!gameOver){
    p2Score++;
    if (p2Score === winningScore){
      p2Display.classList.add("green");
      p1Button.disabled = true;
      p2Display.textContent = p2Score;
      p2Button.disabled = true;
      gameOver = true;
    }
    p1Display.textContent = p2Score;
  }
});

resetButton.addEventListener("click", reset);


input.addEventListener("change", function(){
  winningScore = Number(this.value);
  score.textContent = winningScore;
  reset();
});

function reset(){
  p1Score = 0;
  p2Score = 0;
  p1Display.textContent = 0;
  p2Display.textContent = 0;
  p1Display.classList.remove("green")
  p2Display.classList.remove("green")
  p1Button.disabled = false;
  p2Button.disabled = false;
  gameOver = false;
}
