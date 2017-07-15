/**
 * Created by kshine on 2017/7/15.
 *
 var box = true;
 alert(typeof box);
 alert(typeof box.toString());

 //进制转换
 var box = 10;
 alert(box.toString());//10
 alert(box.toString(2));//1010
 alert(box.toString(8));//12
 alert(box.toString(16));//a

 var box =null;
 //alert(box.toString());
 alert(String(box));// 'null'
 alert(typeof String(box)); //'string'

 var box1 =undefined;
 //alert(box1.toString());
 alert(String(box1));// 'undefined'
 alert(typeof String(box1)); //'string'

 //object
 var box = null;
 var box = {};

 var box = new Object(2);
 var age = 100;
 alert(box);
 alert(typeof box);//object
 alert(box+age);//object

 */

var box =  new Number(60);
alert(typeof box);



