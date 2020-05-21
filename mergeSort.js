var fn = require("./core");   //{exch :fn ,less : fn}      
let [less, exch ] = [fn.less, fn.exch];

//原地归并的抽象方法:用于归并两个有序数组
let aux = [];                               //辅助空间
function merge(a,low,mid,hi){
    console.log(a,low,mid,hi);              //观察子归并状态
    for (let m = low; m <= hi; m++) {
        aux[m] = a[m]; 
    }
    let i = low, j= mid + 1;               //指针标识
    for (let k = low; k <= hi; k++) {
        if(i> mid) a[k] = aux[j++];
        else if(j> hi) a[k] = aux[i++];
        else if(less(aux[j],aux[i])) a[k] = aux[j++];
        else a[k] = aux[i++]     
    }
}

function mergeSort(arrayData){

    sort(arrayData,0,arrayData.length-1);
}

function sort(arrayData, low, hi){
    let mid = low + parseInt((hi-low)/2);
    
    if(hi<= low)return;                    //递归退出条件
    sort(arrayData,low,mid);
    sort(arrayData,mid + 1, hi);
    merge(arrayData,low,mid,hi);
}

exports = module.exports = {
    mergeSort
}