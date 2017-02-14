//creat secretNumber
var secretNumber = 4;
//ask user for guess
var stringGuess = prompt("Guess a number");
var guess = Number(stringGuess);

//check if guess is right
if(guess === secretNumber) {
  alert("You got it right! Awesome!");
}
//otherwise, you got it wrong
else if (guess > secretNumber){
  alert("Too high. Guess Again!");
}
else {
  alert("Too low. =\\ Guess again!");
}
