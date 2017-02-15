var numbers = [];

var input = prompt("Give me any number");

var number = parseInt(input);

if (number != NaN){
  for (var i = 1; i <= number; i++) {
    numbers.push(i);
  }
}

for (var i = 0; i < numbers.length; i++) {
  if (numbers[i] % 3 === 0) {
    console.log(numbers[i] + " is divisible by 3");
  }
}

numbers.forEach(function(num){
  if (num % 3 === 0) {
    console.log(num + " is divisible by 3");
  }
});
