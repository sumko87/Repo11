// Only change code below this code
var myString ="Paragon is the best!";
function useMethods(str) {
    var myReverse=str.split("").reverse().join("");
    var countCharacters=myReverse.split(" ").map(x=>x.length);
    return {myReverse, countCharacters};
}
console.log(useMethods(myString));
// Only change code above this code
module.exports = useMethods;