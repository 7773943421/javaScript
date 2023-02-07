    console.log('====1) square num=====');
    var square=function (num1) {
        console.log(`The given num is ${num1} and square is ${num1*num1}`);
       
    }
    square(5);
    square(6);
    square(25);
    square(100);


    console.log('====2) typeof function=====');
    console.log( `The typeof function is ${typeof square}`);



    console.log('====3) Area of Rectangle=====');
    var rectangle=function (r1,r2) {
        console.log(`The area of rectangle is ${r1*r2}`);
    }
   rectangle(499,917) 


   console.log('====4) square num=====');
   var swap=function (value1,value2) {
    
    console.log(`Before the swap ${value1} and ${value2}`);
    var value3;
    value3=value1;
    value1=value2;
    value2=value3;
    console.log(`After the swap is ${value1} and ${value2}`);
   }
   swap('Virat','Anushka');
   swap(1000,2000)


   console.log('====5) Given String=====');
  var total= function () {
    var str='JS the Most Popular language';
    console.log(`'JS the Most Popular language'`);
    console.log(`The total no of char in given string ===>${str.length}`);
    console.log(`The character of given string is space empty ${str.charAt(6)}`);
    console.log(`The character of given string is space empty ${str.charAt(11)}`);
    console.log(`The character of last  ${str.charAt(str.length-1)}`);
    console.log(`The character of frist  ${str.charAt(0)}`);
    console.log(`The square of length is ${str.length*str.length}`);
  
    
   }
   total();
