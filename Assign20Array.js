const fruit_seasonal=['Banana','Orange','Apple','Mango','Water Melon'];
console.log(`The frist element is ${fruit_seasonal[0]} and last element is ${fruit_seasonal[fruit_seasonal.length-1]}`);
fruit_seasonal.unshift('Papaya')
console.log(`given array is [${fruit_seasonal}]`);
fruit_seasonal.splice(4,1,);
console.log(`The mango replce given array is==> [${fruit_seasonal}]`);
fruit_seasonal.push('Pineapple')
console.log(`The add Pineapple in last==> [${fruit_seasonal}]`);
fruit_seasonal.splice(4,0,'Dragon fruit ');
console.log(`The dragon fruit add before the water malon==> [${fruit_seasonal}]`);
fruit_seasonal.splice(1,1,'Kiwi')
console.log(`The remove the orange and place kiwi==> [${fruit_seasonal}]`);
for (let i = 1;i <4;i++) {
   console.log(fruit_seasonal[i]);
    
}
console.log(fruit_seasonal);
console.log(fruit_seasonal[5]);
console.log(fruit_seasonal[6]);
console.log(fruit_seasonal[7]);
