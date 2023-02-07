
console.log("======1)=======");
function display(arg1) {
    if (arg1>18) {
        console.log("You are eligible for vote");
    } else {
        console.log("You are not eligible for vote");
    }
    if (arg1>1200) {
        console.log("Invalid data");
    }
    if (arg1<0) {
        console.log("Invalid data");
    }
}
display(45);
display(17);
display(8);
display(20);
display(-10);
display(200);
display(0);

console.log("======2)=======");
function gradeCalculatin(marks) {
    if (marks>=90) {
    console.log(`funstatic marks ${marks} your grade is A+`);
    }
    if (marks>=75&& marks<90 ){
        console.log(`Excellent marks ${marks} your grade is A`);
    }
    if (marks>=50&&marks<75) {
        console.log(`Good Marks ${marks} your grade is B`);
    }
    if (marks>=35&&marks<50) {
        console.log(`Marks is ${marks} your grade is c,Need Improvment`);
    }
    if (marks==0 &&marks<0&&marks>100) {
      console.log('Please provide valid marks');  
    }
}
gradeCalculatin(98);
gradeCalculatin(80);
gradeCalculatin(90);
gradeCalculatin(0);
gradeCalculatin(150);
gradeCalculatin(-7);
gradeCalculatin(35);
gradeCalculatin(29);
gradeCalculatin(64);
gradeCalculatin(49);
gradeCalculatin(91);
gradeCalculatin('Eighty');

