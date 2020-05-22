var fn = require("./core");   //{exch :fn ,less : fn}      
let [less, exch ] = [fn.less, fn.exch];

//自顶向下归并排序，大问题递归分成子问题。
function quickSort(arrayData){
    console.log(arrayData);
    //第一步可以先打乱顺序
    sort(arrayData,0,arrayData.length-1);
}

function sort(arrayData,low,hi){
    if(hi <= low) return;
    
    //快速排序先处理数组（切分）再递归，归并排序先递归再处理数组（归并）。
    let j = partition(arrayData,low,hi);
    sort(arrayData,low,j-1);
    sort(arrayData,j+1, hi);
}

//切分数组 arrayData[low..i-1],arrayData[i],arrayData[i+1..hi]
function partition(arrayData,low,hi){
    let v = arrayData[low];
    let i = low;
    let j = hi + 1 ;
    while(true){
        while(less(arrayData[++i],v)) if(i>= hi)break; 
        while(less(v,arrayData[--j])) if(j<= low)break; 
        if(i>=j)break;
        exch(arrayData,i,j);
    }
    exch(arrayData,low,j);
    return j;
}

//  var test = [7,5,6,2,1,3,5,4,8,9];
//  partition(test, 0, test.length-1);
//  console.log(test);


exports = module.exports = {
    quickSort
}



//切分数组 arrayData[low..i-1],arrayData[i],arrayData[i+1..hi]
//错误切分实现
function error1partition(arrayData,low,hi){
    let first = arrayData[low];
    let i = low+1;
    let j = hi;
    for (let i = low + 1; arrayData[i] <= first; i++) {
        for (let j = hi; arrayData[j] > first; j--) {
            if(i >= j){
                exch(arrayData,low,j);
                return j;
            }
            exch(arrayData,i,j);
        }
        
    }
}
function error2partition(arrayData,low,hi){
    let v = arrayData[low];
    let i = low+ 1 ;
    let j = hi ;
    while(true){
        for (; less(arrayData[i],v); i++) {
            if(i>= j)break;  
        }
        for (; less(v,arrayData[j]); j--) {
            if(j<= i)break;  
        }
        if(i>=j)break;
        exch(arrayData,i,j);
    }
    exch(arrayData,low,j);
    console.log(j);
    return j;
}
