var nums = [1,2,2,3,4,5];

function myForEach(arr, func) {
  //loop through arrays
  for(var i = 0; i < arr.length; i++) {
    func(arr[i]);
  }
  //call func for each item in array
}
