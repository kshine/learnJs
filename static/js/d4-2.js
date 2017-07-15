/**
 * Created by kshine on 2017/7/10.
 *
 //八进制 以0开头的数字 有超过8的数字  自动解析为十进制
 var box = 070;
 alert(box);

 //十六进制  以0x开头
 //浮点型  0.38
 var box = 0.38;
 alert(box);

 var box1= 8.;
 alert(box1);//自动转换为整型

 var box =4.12e9;//科学计数法
 var box1=4.12e-9;//过小的数自动转变为科学计数法
 var box2=0.00000000412;
 alert(box);
 alert(box1);
 alert(box2);

 alert(Number.MAX_VALUE);
 alert(Number.MIN_VALUE);

 Number.POSITIVE_INFINITY; //正无穷
 Number.NEGATIVE_INFINITY;//负无穷
 Infinity; //无穷
 -Infinity;

 var num = 100e1000;
 alert(isFinite(num)); //判断是否超出范围

 //可以通过 Number.NaN 得到 NaN 值，任何与 NaN 进行运算的结果均为 NaN，NaN 与自身不相等(NaN 不与任何值相等)
 alert(Number.NaN);
 alert(1+NaN);
 alert(NaN === NaN);

 var box='Lee';
 alert(isNaN(box));
 //非数字类型字符串和布尔类型 返回false

 var box1={};
 alert(isNaN(box1));

 //对象toString返回数值对象 则为false
 var box2={
    toString:function () {
        return 123;
    }
};
 alert(isNaN(box2));

 var box3={
    toString:function () {
        return 'Lee';
    }
};
 alert(isNaN(box3));

 alert(Number(true));//返回1
 alert(Number(false));//0
 alert(Number(null));
 alert(Number(undefined));//NaN
 alert(Number(''));//0
 alert(Number('Lee'));//NaN

 alert(parseInt('123LL45'));//123  起始为数字
 alert(parseInt(12.34));//小数点不是数字 12
 alert(parseInt(''));//NaN
 es6 增加第二个参数  解决进制问题

 alert(parseInt('1f'));//1
 alert(parseInt('1f',16));//31
*/


alert(parseFloat('123Lee')); //123
alert(parseFloat('0xA'));//0  不认十六进制
alert(parseFloat('123.4.5')); //123.4


