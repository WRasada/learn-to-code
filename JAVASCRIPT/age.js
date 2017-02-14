var age = prompt("How old are you?");
age = parseInt(age);

if (age <= 0) {
  console.log("Really? I dont have time for your games, give me a real number.");
}
else if (age === 21) {
  console.log("Happy 21st Birthday!");
}
else if ((age % 2) !== 0) {
  console.log("Your age is odd!")
}
else if (age % Math.sqrt(age) === 0) {
  console.log("Your age is a perfect square!")
}
else {
  console.log("Ok, your free to go.")
}
