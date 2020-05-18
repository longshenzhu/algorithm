var fn = require("./core");   //{exch :fn ,less : fn}      
let [less, exch ] = [fn.less, fn.exch];


//选择排序
function selection(arrayData){
    let len = arrayData.length;
    if(!arrayData || len == 0)return;
    for (let i = 0; i < len; i++) {
        let min = i;
        for (let j = i; j < len; j++) {
            if(less(arrayData[j],arrayData[min])){
                min = j;
            }
        } 
        exch(arrayData,i,min);  
    }
}

exports = module.exports = {
    selection
}