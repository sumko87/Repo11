// only change code below this line
function multiplyArrayFunction(myArray) {
    var sum = 0;
    var product = 1;
    for (var i = 0; i < myArray.length; i++) {
      for (var j = 0; j < myArray[i].length; j++) {
        product *= myArray[i][j];
        sum+=myArray[i][j];
      }
    }
    // Only change code above this line
    return {product, sum};
  }
  console.log(multiplyArrayFunction([[2], [5, 6, 7], [8, 9]])); // Change this line
  console.log(multiplyArrayFunction([[2.5, 2],[0.5,0.2],[8]])); // Change this line
  console.log(multiplyArrayFunction([[1,2],[3,4,5,6],[7,8,9]])); // Change this line
  module.exports = multiplyArrayFunction;

