// Only change code below this code
var str="Paragon";
function myReverse(str) {
    var reverse ="";
    for(var i=str.length-1; i>=0; i--) {
        reverse+=str[i];
    }
    return reverse;
}
console.log(myReverse(str));
// Only change code above this code
module.exports = myReverse;