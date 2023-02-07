function gradeSysytem(score) {
    if (score<35) {
        console.log('you are failed');
    }
    if (score>=35) {
        console.log('You are passed');
    }
    if (score>=35&&score<60) {
        console.log("GRADE is C");
    }
    if (score>=60&&score<75) {
        console.log('Grade is B');
    }
    if (score>=75&&score<90) {
       console.log('GRADE is A'); 
    }
    if (score>=90&&score<=100) {
        console.log('GRADE is A+');
    }
    if (score<0&&score>100) {
        console.log('Invalid input');
    }
    if ( score=='string') {
        console.log('Invalid input');
    }
    if (score===null&&score===undefined) {
        console.log('Invalid Input');
    }
}
gradeSysytem(66);
gradeSysytem(13);
gradeSysytem("");
gradeSysytem(98);
gradeSysytem("fiftey Five");
gradeSysytem(35);
gradeSysytem(75);
gradeSysytem(null);
gradeSysytem(undefined);
gradeSysytem(-20);
gradeSysytem(55);
gradeSysytem(82);