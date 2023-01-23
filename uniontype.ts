console.log("========Union Type=========");


var sn: string | number;

sn = 'codemind';
sn = 100; 


console.log("========Type annotation with union===========");

type test=
String | String [] |Number

function formatCommandLine(input: test) {
    let line = '';
    if (typeof input === 'string') {
        line = input.trim();
    }
     
    else {
        line = input.map(x => x.trim()).join(' ');
    }
    return line;
}


console.log(formatCommandLine('hello ')); // hello
console.log(formatCommandLine(['hello ', 'world '])); // helloword
\\console.log(formatCommandLine(123457));


console.log("===============Class Parameter Property==========================");



class Person1 {
    public fname: string;
    public age: number;

    // parameterised constructor .
    constructor(fname: string, age: number) {
        this.fname = fname;
        this.age = age;
    }
}

const jack = new Person1('Jack', 30);
console.log(jack.fname, jack.age);

// update code

class Person2 {
   

    // parameterised constructor .
    constructor(public fname: string,public age: number) {
        
}
}
const jack = new Person2('Jack', 30);
console.log(jack.fname, jack.age);





function add(first: number, second: number){
    return second + first;
}

add(1 , 2);

add('hello', 'word'); 

let empId : number   = 101;

empId = null;






