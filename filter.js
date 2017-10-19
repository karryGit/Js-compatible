var arr = [1, 2, 4, 6, 7, 8, 9];
//    filter
//    filter为“过滤”、“筛选”之意。指数组filter后，返回过滤后的新数组。用法跟map极为相似：

//参数函数(参数1:数组中的每一个,参数2:数组下标,参数3:数组本身)
var filtered = arr.filter(function (value) {
    return value > 3;
});
//利用原型方法给数组添加方法
Array.prototype.filterx = function (fn) {
    //接收传进来的数组长度
    let len = this.length;
    //判断第一个参数是否为函数
    if (typeof fn != "function"){
        //如果不是函数返回一个类型错误
        throw new TypeError();
    }
    //创建一个空数组
    let res = [];
    //为函数设置参数arguments代表有多少值就可以传多少参数
    var context = arguments[0];
    //遍历调用那个数组
    for (let i = 0; i < len; i++){
        //如果数组的值为true
        if (this[i]){
            //接收数组的值
            let val = this[i];
            //如果函数的形参是数组内容,数组下标,数组自身
            if (fn.call(context, val, i, this)) {
                //就用创建的数组接收数组内容
                res.push(val);
            }
        }
    }
    //并且将新数组作为返回值
    return res;
};
//参数函数(参数1:数组中的每一个,参数2:数组下标,参数3:数组自身)
//有返回值为一个新数组(数组可以接收过滤条件)
//当给函数里写 条件时过滤掉条件之后返回一个数组
var filtered1 =arr.filterx(function (value,key) {
    console.log(value,key)
    return value < 3;
})
console.log(filtered1)