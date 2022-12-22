var squ = function (num1) {
  var multi = num1 * num1;
  console.log("squre of num", num1, "=", multi);
};
squ(5);
squ(6);
squ(25);
squ(100);
console.log(typeof squ);

//3
console.log("Area of Triangle");

var tran = function (length, width) {
  var area = length * width;
  console.log(area);
};
tran(499, 917);

//4

var swap = function swap_value(value1, value2) {
    console.log("After the swap");
    console.log("Virat","Anushka");
  var temp = value1;
  value1 = value2;
  value2 = temp;
  console.log("Before the swap");
  console.log(value1, value2);
};
swap("virat", "Anushka");
swap(1000, 2000);

//5

var fristName = function () {
  console.log(fristName.length);
  console.log("Index char is", fristName.charAt(3));
  console.log("index of string lang is:", fristName.charAt("lang"));
  console.log("Last char ", fristName.length - 1);
  console.log("Last char ", fristName.length - 3);
};
fristName("JavaScript the most popular language");
