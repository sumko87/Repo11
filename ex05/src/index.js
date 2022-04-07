// Create a monitorsListArray array here
var monitorsListArray=["Apple", "Peach", "Berry"];
// End of monitorsListArray array
// Create a function below this line
function myMonitorsFunction(monitor) {
    var monitorsList=[];
    for(var i=0; i<3;i++) {
        monitorsList.push([monitor[i], i+1]);
    }
    return monitorsList;
}
// End of creating a function
console.log(myMonitorsFunction(monitorsListArray));
module.exports = myMonitorsFunction;