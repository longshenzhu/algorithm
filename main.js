var fn = require('./2.1');
let [selection] = [fn.selection];

(function main(){

    var test = [7,5,6,2,1,3,5,4,8,9];
    sort(test);
    show(test);
    
}());

function sort(arrayData){
    var sortAlgorithm = selection;
    //进行排序
    sortAlgorithm(arrayData);
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

