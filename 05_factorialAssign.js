function factorial(num1){
var fact=1;
if(num1==0){
    console.log(`The factoriao of num is ${num1} is one`);
}else if (num1<0) {
    console.log(`The factorial of _negative number is not possible`);
} else {for (let i = 1; i <= num1; i++) {
    fact=fact*i;
}
 console.log(`The factorial of ${num1} is ${fact}`);  
}
}
factorial(5);
factorial(7);
factorial(8);
factorial(12);
