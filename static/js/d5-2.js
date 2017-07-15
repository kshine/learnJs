/**
 * Created by kshine on 2017/7/15.

 //关系运算符
     alert(3>22);//false;
     alert('3'>22);//fasle 其中只有一个是数值字符串 转换成数值比较
     alert('3'>'22');//true 如果都是数值字符串 比较第一个数值大小

     //有一个是对象 返回 toString或者valueOf 方法
     alert(2>{});//false
     alert(2>{
        toString:function () {
            return 1;
        }
        });//true

     alert('a'>'b');//false 都是字符串 比较ASCII码
     alert('a'>'B');//true  大写字符在前面

 //相等不等比较
     //boolean值会转换为数值 true->1 false->0
     console.log(false==0);
     console.log(null == undefined); //不需要任何转换的情况下 相等
     console.log(NaN == 1); //false
     console.log(NaN != 1); //true
     //对象 比较地址
     //全等 数据类似 和数值 相等 ===

     console.log(null == 0);//null undefined 在比较时不会自动转换
     console.log('' == 0);//字符串会自动转换

 // 与操作符&&
     console.log({} && (3>2)); //第二个操作数是boolean值 直接返回第二个操作数
     console.log(true && {}); //第一个操作数是boolean true 返回第二个操作类型
     console.log(false && {}); //第一个操作数是boolean false 则直接返回false
     //短路操作，  有一个操作数是null 或者 undefined 则返回null 和undefined
     console.log((5>4) && null);
     //console.log((5>4) && age);
     console.log((5>6) && undefined);

 //或操作符 ||
     //第一个操作数是对象 则直接返回第一个操作数
     console.log({} || true);
     console.log({} || false);
     //两个都是对象的情况下 返回第一个
     alert({
            toString:function(){
                return 1;
            }
        } ||
     {
         toString:function(){
             return 2;
         }
     });

     console.log(null || null); //null
     console.log(NaN || NaN);//NaN
     console.log(undefined || undefined); //undefined;
     //短路操作
     console.log(true || age);
     console.log(false || age);


 // 非！
     console.log(!{});//false
     console.log(!'');//true
     console.log(!'Lee');//false
     console.log(!0);//true
     console.log(!8);//false
     console.log(!null);//true
     console.log(!undefined);//true
     console.log(!NaN);//true
 */



