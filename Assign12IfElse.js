console.log('==========1)===========');
function numeber(num1) {
    if (num1%2==0) {
        console.log(`${num1} The number is even`);
    } else {
        console.log(`${num1} The number is odd`);
    }
}
numeber(2);
numeber(45);
numeber(13);
numeber(0);
numeber("70");

console.log('==========2)===========');
function check(arg1,ag2,arg3) {
if (arg1>ag2&&arg1>arg3) {
    console.log(`greater num is ${ arg1}`);
} else if(ag2>arg1&&ag2>arg3) {
    console.log(`greater num is ${ag2}`);
} else{
   console.log(`greater num is ${arg3}`); 
}
}
check(56,70,80);
check(-20,-90,0);