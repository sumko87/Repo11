// Only change code below this line
function splitArrayInGroups(arr,n) {
    var result=[];
    for (let i = 0; i<n; i++) {
        const chunk = arr.slice(i * n, (i + 1) * n);
        result.push(chunk);
    }
    return result;
}
// Only change code above this line
console.log(splitArrayInGroups(["a", "b", "c", "d"], 2)); // Change this line
console.log(splitArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3)); // Change this line
console.log(splitArrayInGroups([0, 1, 2, 3, 4, 5], 2)); // Change this line
console.log(splitArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 3)); // Change this line
console.log(splitArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2)); // Change this line
module.exports = splitArrayInGroups;