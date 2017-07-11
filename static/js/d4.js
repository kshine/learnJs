/**
 * Created by kshine on 2017/7/10.
 var box;
 alert(box);
 alert(typeof box); //box是Undefined类型 值是undefined 类型返回的字符串undefined

 var box =true;
 alert(box);
 alert(typeof box); //box是Boolean类型 值是true 类型返回的字符串boolean

 var box ='王大锤';
 alert(box);
 alert(typeof box); //box是String类型 值是'王大锤' 类型返回的字符串string

 var box =250;
 alert(box);
 alert(typeof box); //box是Number类型 值是250 类型返回的字符串number

 //空的对象，表示这个对象创建了，里面没东西
 var box ={};  //new Object();
 alert(box);
 alert(typeof box); //box是Object类型 值是[object Object] 类型返回的字符串object
 [object objectname] 小写的是方法返回的值的格式中默认的，大些的是对象的名字Object

 //空对象，表示没有创建，就是一个null
 var box =null;
 alert(box);
 alert(typeof box); //box是Null类型 值是null 类型返回的字符串object

 function box(){};
 alert(box);
 alert(typeof box); //box是Function函数 值是function box(){}  类型返回的字符串function

 //判断对象是否已经创建
 var box = {};
 if(box != null){
 alert("对象已经创建成功！");
 };

 var box = {};
 alert(typeof(box));
 if(typeof(box) == "object"){
 alert("对象已经创建成功！");
 };

 //chrome 不知道为什么 第一个alert会闪
 var box;
 box = {name:1};
 alert(box);

 var box1 = '';
 var box2 = 0;
 var box3 = false;

 //数据类型判断
 alert(undefined == null); //数据类型转换后比较 未初始化的变量和赋值为null的变量相等
 alert(undefined === null); //数据类型不转换，所以需要比较数据类型
 alert(typeof undefined == typeof null);

 var box = 'wang';
 alert(Boolean(box)); //boolean 类型转换 true

 alert('hello world');
 var box = 'wang';
 if(box){
    alert('真');
}else{
    alert('假');
}
 //非空字符串 true  非0和非NaN number true
 //null undefined  返回false
 */

alert('hello world');

var box = 'wang';
if(box){
    alert('真');
}else{
    alert('假');
}
//非空字符串 true  非0和非NaN number true
//null undefined  返回false