console.log("============Question1============");
var eligible=function (arg1){
if (arg1>=18) {
    console.log(`your age is ${arg1} you are eligible for voting`);
} else {
    console.log(`${arg1} He is not elogible for voting`);
}
if(arg1>100 && arg1<0) {
    console.log( `${arg1}  Invalid data`);
}
}
eligible(45);
eligible(17);
eligible(8);
eligible(20);
eligible(-10);
eligible(200);
eligible(0);


console.log("============Question2============");

function gradeCalculation(marks){
if (marks>=90) {
    console.log(`Funtastic mark ${marks} your grade is A+`);
}
if (marks>=75 && marks<75) {
    console.log(`Excellent mark ${marks} your grade is A`);
}
if (marks>=50 && marks<75) {
    console.log(`good mark ${marks} your grade is B`);
}
if (marks>=35 && marks<50) {
    console.log(`good mark ${marks} your grade is C,Need improve`);
}

if (marks<=0 && marks>100) {
    console.log(`${marks} please provide valid marks`);
}
if (marks== "97" || marks=="Eighty") {
    console.log(`"${marks}" Invalid data`);
}
}

gradeCalculation(98);
gradeCalculation(80);
gradeCalculation(90);
gradeCalculation(0);
gradeCalculation(150);
gradeCalculation(-7);
gradeCalculation(35);
gradeCalculation(29);
gradeCalculation(64);
gradeCalculation(49);
gradeCalculation("97");
gradeCalculation("Eighty");