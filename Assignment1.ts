var mathMark=Number(prompt(`Enter Math Mark`));
console.log(`Math marks=${mathMark}`);

var Physicsmark= Number(prompt(`Enter Physics Mark`));
console.log(`Math marks=${Physicsmark}`);

var chemistryMark= Number(prompt(`Enter Chemistrey Mark`));
console.log(`Math marks=${chemistryMark}`);


var totalMark=mathMark+Physicsmark+chemistryMark;
console.log(`Total Mark ${totalMark}`);

var avgmark= totalMark/3;
console.log(`Average Mark : ${avgmark}`);

if (avgmark < 70) {
    console.log(`C Gread`);
}
else if (avgmark > 70 &&  avgmark < 90) {
    console.log(`B gread`);
}
else if (avgmark > 90 && avgmark< 100) {
    console.log(`A Grade`);
}
else {
    console.log(`Invalid Data`);

}
