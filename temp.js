//用于临时测试

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