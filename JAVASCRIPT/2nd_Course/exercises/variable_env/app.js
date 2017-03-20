
function a() {
  function b() {
    console.log(myVar);
  };

  var myVar = 2;
  console.log(myVar);
  b();
}

var myVar = 1;
console.log(myVar);
a();
