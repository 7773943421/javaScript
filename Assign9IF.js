console.log('=========1)Functionin if block===========');

function number(num1) {
    if (num1%2==0) {
        console.log(`The given number is even ${num1}`);
    }
    if (num1%2!==0) {
        console.log(`th given number is odd ${num1}`);
    }
}
number(45);
number(70);
number(67);
number(98);


console.log('=========2)Functionin if block===========');
function age(person) {
    if (person>18) {
        console.log(`${person}  You are eligible for vote`);
    } else {
        console.log(`${person}  You are not eligible for vote`);
    }
}
age(18);
age(20);
age(17);
age(40);


console.log('=========3)Functionin if block===========');

function charct() {
    var str="javaScript-Es6";
    var len=str.length
    if (len>10) {
        console.log("String contain more than 10 character");
    } else {
        console.log("Less than 10 character");
    }
}
charct();

console.log('=========4)Functionin if block===========');
function str(Ex) {
   if (Ex==="java") {
    console.log("Java Script Language");
   } else {
    console.log("not a java script language");
   } 
}
str("JAva sript Language");
str("java")
