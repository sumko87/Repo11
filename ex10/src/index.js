// Only change code below this line
function myBouncer(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == 0 || Number.isNaN(arr[i]) || arr[i] == null || arr[i] == false || arr[i] == "" || arr[i] == undefined) {
            arr.splice(i, 1);
            i--;
        }
    }
    return arr;
}
// Only change code above this line
console.log(myBouncer([7, "ate", "", false, 9])); // Change this line
console.log(myBouncer(["a", "b", "c"])); // Change this line
console.log(myBouncer([false, null, 0, NaN, undefined, ""])); // Change this line
console.log(myBouncer([null, NaN, 1, 2, undefined])); // Change this line
module.exports = myBouncer;

