console.log('=======1=======');
class Vechile {
    wheelr;
    model;
    prize;
    engine;
    constructor (wheelr,model,prize,engine){
        this.wheelr=wheelr;
        this.model=model;
        this.prize=prize;
        this.engine=engine;
    }
}
let vechile1=new Vechile(2,'Honda',80000,'SI');
let vechile2=new Vechile(2,'shine',120000,'SI');
let vechile3=new Vechile(2,'unicorn',150000,'SI');
let vechile4=new Vechile(2,'FZ',180000,'SI');
let vechile5=new Vechile(2,'R15',200000,'SI');
console.log(vechile1);
 console.log(vechile2);
 console.log(vechile3);
 console.log(vechile4);
 console.log(vechile5);


console.log('=======2) class=====');
class Collage {
    
    HOD;
    Principle;
    Staff;
    Din;
    constructor (HOD,Principle,Staff,Din){
this.HOD=HOD;
this.Principle=Principle;
this.Staff=Staff;
this.Din=Din;
    }
    
}
let collage1=new Collage(1,1,6,1);
let collage2=new Collage(2,3,1,5);
let collage3=new Collage(1,3,2,4);
let collage4=new Collage(3,2,1,5);
console.log(collage1);
console.log(collage2);
console.log(collage3);
console.log(collage4);


console.log('=======3)=========');
function traverseObject(arg1) {
    for (const key in arg1) {
        if (Object.hasOwnProperty.call(arg1, key)) {
            const element = arg1[key];
            console.log(`${key}  ${element}`);
        }
        
    }
    
}
traverseObject(collage1);
traverseObject(collage2);
traverseObject(collage3);
traverseObject(collage4);


console.log('==================4)================');
var a=0;
var b=1;
console.log(a);
console.log(b);
for (let i = 0; i<5; i++) {
    var temp=a+b;
    console.log(temp);  
    a=b;
    b=temp;
}

console.log("=========5)========");
var number=prompt("please enter a number");
if (number==1) {
    console.log(`${number} is neither prime nor composite number`);
}else if(number<1){
    console.log(`${number} is not a prime number`);
}else{
    for (let i = 0; i < array.length; index++) {
        const element = array[index];
        
    }
}