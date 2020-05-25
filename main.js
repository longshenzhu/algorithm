let fn = require('./2.1');
let mergeFn = require('./mergeSort');
let quickFn = require('./quickSort');
let heapSortFn = require('./heapSort');
let [selection,insertion,shell, mergeSort,mergeSortBU, quickSort,heapSort] = [fn.selection, fn.insertion, fn.shell,mergeFn.mergeSort, mergeFn.mergeSortBU, quickFn.quickSort,heapSortFn.heapSort];

(function main(){
    var test = [7,5,6,2,1,3,5,4,8,9];
    sort(test);
    show(test);
    
}());

function sort(arrayData){
    // var sortAlgorithm = selection;   //选择排序
    // var sortAlgorithm = insertion;   //插入排序
    // var sortAlgorithm = shell;          //希尔排序

    // var sortAlgorithm = mergeSort;
    // var sortAlgorithm = mergeSortBU;

    // var sortAlgorithm = quickSort;
    var sortAlgorithm = heapSort;
    
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


