var fn = require("./core");   //{exch :fn ,less : fn}      
let [less, exch ] = [fn.less, fn.exch];

//堆排序
function heapSort(arrayData){
    let N = arrayData.length;
    //堆化数组
    for (let k = parseInt(N/2)-1; k >= 0; k--) {
        sink(arrayData,k ,N);
    }
    //排序
    while(N>0){
        exch(arrayData, 0 ,--N);
        sink(arrayData, 0 ,N);
    }
}


//下沉子元素到合适位置   二叉堆，k从0开始，子元素为2k+1，2k+2；k从1开始，子元素为2k，2k+1；
//下沉或者叫堆化
function sink(a,index,n){
    let largest = index;
    let leftIndex = 2*index + 1;
    let rightIndex = 2*index + 2;
    if(leftIndex < n && less(a[largest],a[leftIndex])){
        largest = leftIndex;
    }
    if(rightIndex < n && less(a[largest],a[rightIndex])){
        largest = rightIndex;
    }
    if(largest !== index){
        exch(a,largest,index);
        sink(a,largest,n)
    }
}

exports = module.exports = {
    heapSort
}
