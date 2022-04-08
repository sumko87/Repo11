// Only change code below this line
function mySplice(arr1, arr2, n) {
    var arr1 = arr1.slice();
    var arr2 = arr2.slice();
    for (var i = 0; i < arr1.length; i++) {
        arr2.splice(n, 0, arr1[i]);
    }
    return arr2;
}
// Only change code above this line
console.log(mySplice([1, 2, 3], [4, 5], 1)); // Change this line
console.log(mySplice([1, 2, 3], [4, 5], 2)); // Change this line
console.log(mySplice(["b", "c"], ["a", "d"], 1)); // Change this line
console.log(mySplice(["Dell", "Philips"], ["Samsung", "AOX", "Sony"], 2)); // Change this line
module.exports = mySplice;


