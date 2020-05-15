var fn = require('./2.1');


(function main(){
    console.log(fn);
    var testArray = [];
    sort(testArray);
    show(testArray);
}());

function sort(arrayData,sortFn){
    var sortAlgorithm = sortFn;
    //进行排序
    return arrayData;
}

function exchange(arrayData,index1,index2){
    var mid = arrayData[index1];
    arrayData[index1] = arrayData[index2];
    arrayData[index2] = mid;
}

function compare(small,mid){
    return small < mid;
}

function isSorted(arrayData){
    for (let index = 1; index < arrayData.length; index++) {
        if(!compare(arrayData[index-1],arrayData[index])){
            return false;
        }; 
    }
    return true;
}

function show(arrayData){
    console.log(arrayData.join(','));
    // arrayData.forEach(element => {
    //     consolse.log(element)
    // });
}

