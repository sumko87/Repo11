// Create a temps array here
var temps = [
    [31,32,19,37], //Monday
    [29,27,55,36], //Tuesday
    [17,27,42,46], //Wedensday
    [29,52,21,64], //Thursday
    [91,27,31,61]  //Friday
];
// End of temps array
// Create a function below this line
function myArrayFunction(t) {
    var averageDayTemp=[]; //just declaring empty array
    //calculating avg temp for day1
    var avgT1=0;
    for(var i=0; i<4; i++) {
        avgT1+=t[0][i];
    }
    averageDayTemp.push(avgT1/4); //adding day1 AVg temp to array
    //calculating avg temp for day2
    var avgT2=0;
    for(var i=0; i<4; i++) {
        avgT2+=t[1][i];
    }
    averageDayTemp.push(avgT2/4);
    //calculating avg temp for day3
    var avgT3=0;
    for(var i=0; i<4; i++) {
        avgT3+=t[2][i];
    }
    averageDayTemp.push(avgT3/4);
    //calculating avg temp for day4
    var avgT4=0;
    for(var i=0; i<4; i++) {
        avgT4+=t[3][i];
    }
    averageDayTemp.push(avgT4/4);
    //calculating avg temp for day5
    var avgT5=0;
    for(var i=0; i<4; i++) {
        avgT5+=t[4][i];
    }
    averageDayTemp.push(avgT5/4);
    return averageDayTemp;
}
// End of creating a function
console.log(myArrayFunction(temps));
module.exports = myArrayFunction;