/**
 * Created by kshine on 2017/7/15.
 */

//函数调用语句 function();

//if 语句
  var box = 100;
  // if(box>50){
  //     alert(box);
  // }

  // if(box>50) alert(box); //只管if 后面的一条语句

    // if(1){                 //''，0转换成false  123 转换成true 'Lee' 转换成true
    //     alert("hello world");
    // }


   //if ... else
   //if ... else if ... else if ... else

   switch (box){    //注意穿透
       case 1: ; break;    //if box ==1
       case 50:; break;
       case 100:; break;
       default:                      //相当于if里的else
   }