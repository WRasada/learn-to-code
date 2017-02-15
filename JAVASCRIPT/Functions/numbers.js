//isEven v1
// function isEven(x) {
//   if (x % 2 === 0) {
//     return true;
//   }
//   return false;
// }

//isEven v2

function isEven(x) {
  return x % 2 === 0;
}

function factorial(x) {
  if (x === 0) {
    return 1;
  }

  for (var i = x; i > 1; i--) {
    x = x * (i - 1);
  }
  return x;
}

function kebabToSnake(str) {
  var newStr = str.replace(/-/g, "_");
  return newStr;
}
