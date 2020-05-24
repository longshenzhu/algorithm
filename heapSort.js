var fn = require("./core");   //{exch :fn ,less : fn}      
let [less, exch ] = [fn.less, fn.exch];

//堆排序
function heapSort(arrayData){
    let N = arrayData.length;

    for (let k = parseInt(N/2)-1; k >= 0; k--) {
        sink(arrayData,k ,N);
    }
    while(N>0){
        exch(arrayData, 0 ,N--);
        sink(arrayData, 0 ,N);
    }
}


//下沉子元素到合适位置   二叉堆，k从0开始，子元素为2k+1，2k+2；k从1开始，子元素为2k，2k+1；
//下沉或者叫堆话
function sink(a,k,n){
    while(2*k <= n){
        let j = 2 * k + 1;
        if(j< n && less(a[j--],a[j]))j++;
        if(!less(a[k],a[j]))break;
        exch(a,k,j);
        k = j;
    }
}

exports = module.exports = {
    heapSort
}


var test = [7,5,6,2,1,3,5,4,8,9];
//sink(test,0,3);
heapSort(test);
console.log(test);