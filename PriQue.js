//优先队列数据结构
//用长度为N+1的数组pq[]来表示一个大小为N的堆。不适用N[0],堆元素放在pq[1]至pq[N]中

//优先队列
//核心操作：插入元素、删除最大元素
function PriQue(){
    let pq = [];
    let N = 0;

    //添加元素到末尾，上浮调整到合适位置
    this.insert = function(v){
        pq[++N] = v;
        swim(N);
    }
    //删除最大元素
    this.delMax = function(){
        let max = pq[1];            //从根节点得到最大元素
        exch(1,N--);                //将其和最后一个节点交换，并减少队列长度N
        pq[N+1] = undefined;        //置空
        sink(1);                    //下沉，恢复堆的有序性
        return max;
    }
    this.isEmpty = function(){
        return N == 0;
    }
    this.size = function(){
        return N;
    }


    //内部辅助方法
    function less(i,j){
        return pq[i] < pq[j];
    }
    function exch(i,j){
        let v = pq[i];
        pq[i] = pq[j];
        pq[j] = v;
    }
    //上浮子元素到合适位置
    function swim(k){
        while(k>1 && less(parseInt[k/2],k)){
            exch(parseInt(k/2),k);
            k = parseInt(k/2);
        }
    }
    //下沉子元素到合适位置
    function sink(k){
        while(2*k <= N){
            let j = 2 * k;
            if(j< N && less(j,j++))j++;
            if(!less(k,j))break;
            exch(k,j);
            k = j;
        }
    }
}
