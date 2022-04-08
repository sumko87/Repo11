var myArr = [2,5,9,8,1];
function bubleSort(myArr){    
    for(var i = 0; i < myArr.length; i++){
      for(var j = 0; j < ( myArr.length - i -1 ); j++){
        if(myArr[j] > myArr[j+1]){
          var temp = myArr[j]
          myArr[j] = myArr[j + 1]
          myArr[j+1] = temp
        }
      }
    }
    return myArr;
}
console.log(bubleSort(myArr));
module.exports = bubleSort;
