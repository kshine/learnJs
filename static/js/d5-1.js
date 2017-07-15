/**
 * Created by kshine on 2017/7/15.

 //一元运算符
 var box = 100;
 ++box;//前置递增 --box
 alert(box);
 //后置 box++ box--  赋值顺序不同

 var box = '98';
 box++;//自动转换成数值类型
 alert(box);

 var box = 'ab';
 box++;//NaN 非数值类型
 alert(box);

 var box = false;
 box++;//1  false--> 0
 alert(box);

 var box = {
    valueOf:function () {
        return 123;   //valueOf toString 方法  返回数值类型可运算 否则 NaN
    }
};
 box++;
 alert(box);

 //加减号  正负数
 var box ='98';
 alert(+box);// + 正数 - 负数
 alert(typeof +box);

 var box =false;
 alert(+box);// 0
 alert(typeof +box);

 //算术运算符  加减乘除 取余数
 alert(1+NaN);//NaN
 alert(Infinity+-Infinity);//NaN
 alert(100+'100');//100100;
 var box = 100+'100';//100100;
 alert(typeof box);//String

 alert(10+20+"Hello");
 alert("Hello"+10+20);
 alert("Hello"+(10+20)); //改变运算优先级

 var box = 10 + {};
 alert(typeof box);//10[object Object] string类型

 //根据对象toString返回的数据类型 进行运算
     var box = 10 + {
        toString:function(){
            return 20;
        }
     };
     alert(box);// 30
     alert(typeof box);//Number

     var box = 10 + {
            toString:function(){
                return '20';
            }
        };
     alert(box);// 1020
     alert(typeof box);//string

 //减法运算 特殊情况
 alert(Infinity-Infinity);//NaN;
 alert(-Infinity- -Infinity);//NaN;
 alert(Infinity- -Infinity);//Infinity
 alert(-Infinity-Infinity);//-Infinity
 alert(100-true);//99
 alert(100-'');//100
 alert(100-'70');//30 没有连接规则 number
 alert(100-null);//100
 alert(100-'Lee');//NaN
 alert(100-{});//toString valueOf  返回数值 否则NaN

 //乘除法
 '' 转换为0   true转换为1 false转换为0  null转换为0   string类型转换为NaN
 对象均和toString() valueOf() 返回值的数据类型有关

 //求摸  infinite 全为NaN


 */

alert(100%true);// 0

