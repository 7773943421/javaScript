

var sentence = "I AM Learning ,the javaScript,The language of internte";
// Print the vowels only aeiou or AEIOU
var counter = 0;
for (let index = 0; index < sentence.length; index++) {
    var char = sentence.charAt(index);
    if (char=='a' ||   char=='A')  {
        console.log(char);
        counter = counter +1;
    }   
}
console.log("I AM Learning ,the javaScript,The language of internte");
console.log(`Total no of a and A is : ${counter}`);



var sentence = "My favourite movi is LAggAn";
// Print the vowels only aeiou or AEIOU
var counter = 0;
for (let index = 0; index < sentence.length; index++) {
    var char = sentence.charAt(index);
    if (char=='a' ||   char=='A')  {
        console.log(char);
        counter = counter +1;
    }   
}
console.log("My favourite movi is LAggAn");
console.log(`Total no of a and A is : ${counter}`);



function count