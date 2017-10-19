var arr = [1, 2, 4, 6, 7, 8, 9];
//forEach 参数为函数 函数包含形参(1:数组内容,2:下标值,3:数组本身)
arr.forEach(function (key,value,arr) {
//        console.log(key,value,arr);
});
//利用js原型方法将forEach给Array数组方法  参数1为函数,
Array.prototype.forEach1 = function (fun, context) {
    let len = this.length;
    //arguments是传给函数的参数，是个数组
    let context = arguments[0];     //即使为undefined，call函数也正常运行。
    //判断传入的是否是函数,如果不是函数则报错
    if ( typeof fun !== "function") {
        throw "输入正确函数!";
    }
    //遍历传进来的参数数组
    for (let i = 0; i < len; i++) {
        //将this绑定给函数
        fun.call(context, this[i], i, this);
    }
};
//forEach 参数为函数 函数包含形参(1:数组内容,2:下标值,3:数组本身)
arr.forEach1(function (key,value,arr) {
    console.log(key,value,arr)
});