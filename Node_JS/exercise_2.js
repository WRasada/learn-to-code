var scores = [90, 98, 89, 100, 100, 86, 94];

var scores2 = [40, 65, 77, 82, 80, 54, 73, 63, 95, 49];

function average(arr){
  var result = 0;
  arr.forEach(function(num){
    result += num;
  })
  console.log(Math.round(result / arr.length));
}

average(scores);
average(scores2);
