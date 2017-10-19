var scores = [5, 8, 3, 10];
var current = 7;
//some意指“某些”，指是否“某些项”合乎条件。
//参数 函数(参数1:数组中的每一个,参数2:数组下标,参数3:数组本身和)
scores.some(function (value, key, arr) {
//        console.log(value,key,arr)
});
//如果数组中的某一个值大于current满足条件的时候打印
//    if (scores.some(function (value) {
//            return value > current;
//        })) {
//        alert("朕准了！");
//    }
//给数组添加原型方法
Array.prototype.some1 = function (fun, context) {
    let len = this.length;
    let arr = [];
    //arguments是传给函数的参数，是个数组
    var context = arguments[1];     //即使为undefined，call函数也正常运行。
    //判断传入的是否是函数,如果不是函数则报错
    if (typeof fun !== "function") {
        throw "输入正确函数!";
    }
    //遍历传进来的参数数组
    for (let i = 0; i < len; i++) {
        //将this绑定给函数
        fun.call(context, this[i], this);
        arr.push(this[i]);
    }
    return arr;
};
scores.some1(function (value) {
    return value;
});
if (scores.some1(function (value) {
        return value > current;
    })) {
    alert("朕准了！");
}
