var fn = require("./core");   //{exch :fn ,less : fn}      
let [less, exch ] = [fn.less, fn.exch];

//原地归并的抽象方法:用于归并两个有序数组


//自顶向下归并排序，大问题递归分成子问题。
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

//自底向上归并排序，逐个解决小问题到归并大问题。
function mergeSortBU(arrayData){
    let len = arrayData.length;
    for(let size =1; size<len; size +=size){
        for (let low = 0; low < len-size; low += 2*size) {
            merge(arrayData, low, low+size-1, Math.min(low + 2*size-1,len-1)); 
        }
    }
}



exports = module.exports = {
    mergeSort,
    mergeSortBU
}