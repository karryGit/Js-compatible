# Js-compatible
js foreach map filter some 兼容底层实现写法

***

### foreach

```
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
```

***

### map

```
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
```

***

### filter

```
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
```

***

### some

```
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

```

***

### every

```

```

