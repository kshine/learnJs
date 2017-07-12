/**
 * Created by kshine on 2017/7/10.
 *
 //八进制 以0开头的数字 有超过8的数字  自动解析为十进制
 var box = 070;
 alert(box);

 //十六进制  以0x开头

 alert(Number.MAX_VALUE);
 alert(Number.MIN_VALUE);

 Number.POSITIVE_INFINITY; //正无穷
 Number.NEGATIVE_INFINITY;//负无穷
 Infinity; //无穷
 -Infinity;
*/

var num = 100e1000;
alert(isFinite(num)); //判断是否超出范围

//可以通过 Number.NaN 得到 NaN 值，任何与 NaN 进行运算的结果均为 NaN，NaN 与自身不相等(NaN 不与任何值相等)
alert(Number.NaN);
alert(1+NaN);
alert(NaN === NaN);