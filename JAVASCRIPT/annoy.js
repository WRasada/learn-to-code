// var answer = prompt("are we there yet?");
//
// while(answer !== "yes") {
//   var answer = prompt("are we there yet?");
// }
//
// alert("Yes! we made it!");

var answer = prompt("are we there yet?");

while(answer.indexOf("yes") === -1) {
  var answer = prompt("are we there yet?");
}

alert("Yes! we made it!");
