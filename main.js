var fn = require('./2.1');
let [selection,insertion,shell] = [fn.selection, fn.insertion, fn.shell];

(function main(){

    var test = [7,5,6,2,1,3,5,4,8,9];
    sort(test);
    show(test);
    
}());

function sort(arrayData){
    // var sortAlgorithm = selection;   //选择排序
    // var sortAlgorithm = insertion;   //插入排序
    var sortAlgorithm = shell;          //希尔排序
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

function exch(arrayData,index1,index2){
    var mid = arrayData[index1];
    arrayData[index1] = arrayData[index2];
    arrayData[index2] = mid;
}

function less(small,mid){
    return small < mid;
}

// var testData = [];
// for (let index = 100; index >0; index--) {
//     testData.push(index);
// }

// function test40(arrayData){
//     let N = arrayData.length;
//     let h = 13;
//     while(h>=1){
//         for (let i = h; i < N; i++) {
//             for (let j = i; j >= h && less(arrayData[j],arrayData[j-h]); j-=h) {
//                 exch(arrayData,j,j-h) 
//             }        
//         }
//         h= parseInt(h/3);
//     }
    
// }
