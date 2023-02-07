const arrayNumbers=[20,31,40,25,23,11,29,9,60,2,11];
console.log(`The total no of element avaliable in array is [${arrayNumbers.length-1}]`);
console.log(`The frist and last element in array Numbers [${arrayNumbers[0]}] and last element is ${arrayNumbers[arrayNumbers.length-1]}`);
console.log(`The last element of array is ${arrayNumbers[arrayNumbers.length-3]}`);
console.log(arrayNumbers);
for (const key in arrayNumbers) {
    if (Object.hasOwnProperty.call(arrayNumbers, key)) {
        const element = arrayNumbers[key];
        if (element%2==0) {
            console.log(`The all even number are ${element}`);
        }
    }
}

for (const key in arrayNumbers) {
    if (Object.hasOwnProperty.call(arrayNumbers, key)) {
        const element = arrayNumbers[key];
        if (element%2!==0) {
            console.log(`The all odd number are ${element}`);
        }
    }
}
console.log('=========The even position============');
//for (let i =0;  0< arrayNumbers.length;i=i++) {
//console.log(`${arrayNumbers[i]}`);
    
//}
console.log('=============8)The sum of all element from array number ');
var sum=0;
for (let i = 0;i < arrayNumbers.lengt;i++) {
  sum+=arrayNumbers[i]
    
}
console.log(sum);

console.log();
console.log('9)');







console.log("10");







console.log("11");







console.log("12");









+++9