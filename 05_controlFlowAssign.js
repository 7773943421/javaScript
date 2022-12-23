
console.log("=============1==================");
var str= "I am very good IT Developer";
var count=0;
for (let index = 0; index < str.length; index++) {
    var char=str.charAt(index);
    var charCopy=char.toLowerCase();
    if (charCopy=='a' || charCopy=='e' || charCopy=='i' || charCopy=='o' || charCopy=='u'){

count=count+1;
    } 
    
}
console.log(`The total number of vowels ${count}`);




console.log("=============2==================");
var sum=0;
function cube(num1){
var cubeNum=num1*num1*num1;
console.log(`The cube of ${num1} is ${cubeNum}`);
sum=sum+cubeNum;
}
cube(1);
cube(2);
cube(3);
cube(4);
cube(5);
console.log(`The sum of nubers from 1 to 5 is ${sum}`);


console.log("=============3==================");


var string1 = `Hard work always pays back`;
var string2 = `Soon I will be Angular IT champ`;
function oddPositionedChars(string) {
    let result = "";
    let spaceRemovedStr = string.split(" ").join("");
    for (let index = 0; index < spaceRemovedStr.length; index++) {
        if (index % 2 != 0) {
            result = result + spaceRemovedStr[index];
        }
    }
    console.log(`Odd positioned chars in the string is: ${result}.`);
}
oddPositionedChars(string1);
oddPositionedChars(string2);