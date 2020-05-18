exports = module.exports = {
    exch,
    less
}
// exports = module.exports = {
//     exch : exch,
//     less : less
// }

function exch(arrayData,index1,index2){
    var mid = arrayData[index1];
    arrayData[index1] = arrayData[index2];
    arrayData[index2] = mid;
}

function less(small,mid){
    return small < mid;
}