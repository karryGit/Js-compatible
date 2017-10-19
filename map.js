var arr = [1, 2, 4, 6, 7, 8, 9];
//  map：map即是 “映射”的意思 用法与 forEach 相似，用法即：
//参数为函数(参数1:数组的每一个,参数2:数组下标,参数3:数组自身)
arr.map(function(value, index, array) {
//        console.log(value*value);
});
//利用数组原型方法给map1设置自定义数组方法
Array.prototype.map1 = function (fn,context) {
    //获取调用的数组长度;
    let len = this.length;
    ////arguments是传给函数的参数，是个数组
    let context = arguments[0];
    if(typeof fn !== "function"){
        //如果不是函数则抛出异常
        throw "请输入正确的函数"
    }
    //遍历调用方法的那个数组
    for (let i = 0; i < len; i++) {
        //为函数绑定this,
        fn.call(context,this[i],this)
    }
};
//参数为函数(参数1:数组的每一个,参数2:数组下标,参数3:数组自身)
arr.map1(function (key,value,arr) {
    console.log(key);
})