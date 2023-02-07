console.log("===========1)========");
function control() {
    var sen="I am very goog IT Devloper"
   var count=0;
    var vowelCount=['a','e','i','o','u']
    for (const s of  sen.toLowerCase()) {
        if (vowelCount.includes(s)) {
            count++;
        }
    }
    console.log(`the total no vowel in given string ${count}`);

   }

control();


console.log("========2)==========");
function cube() {
    var sum = 0;
        for (let x=0; x<=5; x++){
            sum += x*x*x;
        
        }
        return sum;
   
}
var sum=cube();
console.log(`The output of result is ${sum}`);

console.log("========3)==========");
function given(oddPositionedChars) {
    for (let i = 0; i < oddPositionedChars.length; i++) {
        if (i%2==0) {
            console.log(`${oddPositionedChars.charAt(i)
            }`);
        }  
    }
}
given('Hard work always pay back');
console.log('Soon i will be  angular IT champ');