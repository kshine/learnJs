/**
 * Created by kshine on 2017/7/15.
 */

//函数调用语句 function();

//if 语句
    //var box = 100;
    // if(box>50){
    //     alert(box);
    // }

    // if(box>50) alert(box); //只管if 后面的一条语句

    // if(1){                 //''，0转换成false  123 转换成true 'Lee' 转换成true
    //     alert("hello world");
    // }


//if ... else
//if ... else if ... else if ... else

// switch (box){    //注意穿透
//     case 1: ; break;    //if box ==1
//     case 50:; break;
//     case 100:; break;
//     default:                      //相当于if里的else
// }


//循环语句
    // var  box = 1;
    //先运行后判断 do while
    // do{
    //     alert(box);
    //     box++;
    // }while (box<=5);  //while里为true的时候 不停循环

//while do 先判断 后运行
    // while(box<=5){
    //     alert(box);
    //     box++;
    // }

    // for(var box2=1;box2<=5;box2++){
    //     alert(box2);
    // }


//循环遍历  for(  in  )
    //      var person={
    //          name:'wang',
    //          age:18,
    //          height:150
    //      }
    //
    //      for (var x in person){
    //          alert(x);
    //      }

    //with() 对象简写
    //  with(person){
    //      var n=name;
    //      var a=age;
    //      var h=height;
    //
    //  }
    //
    // alert(n+a+h);


//break 退出循环
//continue 退出当前循环

    // for (var i = 1; i <= 10; i++) {
    //     if (i == 5) break;
    //     document.write(i + '<br/>');
    // }
    //
    // for (var i = 1; i <= 10; i++) {
    //     if (i == 5) continue;
    //     document.write(i + '<br/>');
    // }