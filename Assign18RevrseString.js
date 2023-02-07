//function revrese(arg1) {
 //   console.log(`${arg1.length}`);
//for (let index = arg1.length; arg1.length >= 0; arg1.length--) {
  //  console.log(`${arg1.charOf(arg1.length)}`); 
//}
//}
//revrese('Hard work always pay back');


console.log('=========================');

function given(oddPositionedChars) {
    console.log(`The sentence is ${oddPositionedChars}`);
   var output=oddPositionedChars.split('').reverse().join('');
   console.log(`The reverse is===> ${output}`);
}
given('Hard work always pay back');
given('Soon i will be  angular IT champ');