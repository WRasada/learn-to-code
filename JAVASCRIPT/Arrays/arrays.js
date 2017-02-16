var numbers = [1,1,3,4,5,6];
var letters = ["a", "b", "c", "d", "e"];

//** printReverse() **//

function printReverse(arr) {
  for (var i = arr.length - 1; i >= 0; i--){
    console.log(arr[i]);
  }
}

//** isUniform() **//

function isUniform(arr) {
  for (var i = 1; i < arr.length; i++) {
    var index = arr[0];
    if (index !== arr[i]) {
      return false;
    }
  }
  return true;
}

//** sumArray() **//

function sumArray(arr) {
  var result = 0;
  arr.forEach(function(num){
    result += num;
  })
  return result;
}

//** max() **//
function max(arr) {
  var number = 0;
  arr.forEach(function(num){
    if (number <= num) {
      number = num;
    }
  })
  return number;
}
