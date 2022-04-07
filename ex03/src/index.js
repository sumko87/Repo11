// Create a myPetsArray array here
var myPetsArray = ["Dog","Cat"]; 
// End of myPetsArray array
// Create a function below this line
function myArrayFunction(myPets) {
    var myNewPets=myPets;
    myNewPets.push("Bird", "Fish");
    myNewPets.shift();
    myNewPets.unshift("Lion");
    myNewPets.pop();
    var firstPet=myNewPets[0];
    var lastPet=myNewPets[myNewPets.length-1]; // last value in array
    return myNewPets;
}
// End of creating a function
console.log(myArrayFunction(myPetsArray));
module.exports = myArrayFunction;