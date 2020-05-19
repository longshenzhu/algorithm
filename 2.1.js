var fn = require("./core");   //{exch :fn ,less : fn}      
let [less, exch ] = [fn.less, fn.exch];


//选择排序2.1
function selection(arrayData){
    let len = arrayData.length;
    if(!arrayData || len == 0)return;
    for (let i = 0; i < len; i++) {
        let min = i;
        for (let j = i; j < len; j++) {                                             //每一轮选出最小值交换到最前面
            if(less(arrayData[j],arrayData[min])){
                min = j;
            }
        } 
        exch(arrayData,i,min);  
    }
}

//插入排序2.2
function insertion(arrayData){
    let len = arrayData.length;
    for (let i = 1; i < len; i++) {
        for (let j = i; j > 0 && less(arrayData[j],arrayData[j-1]); j--){           //描述：与左侧有序数组比较，小于则交换，大于则进入下一轮。
            exch(arrayData,j,j-1);
        }  
    }
}

//希尔排序2.3
function shell(arrayData){

}


exports = module.exports = {
    selection,
    insertion
}


//插入排序粗糙版：不便于理解，第二层嵌套多了很多无用循环操作
function Myinsertion(arrayData){
    let len = arrayData.length;
    for (let i = 1; i < len; i++) {
        let temp = i;
        for (let j = i-1; j >= 0; j--){
            if(less(arrayData[temp],arrayData[j])){
                exch(arrayData,temp,j);
                temp = j;
            }
        }
        
    }
}