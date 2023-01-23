class person{
    private _age:number;
    constructor(age:number){
        this._age=age;
    }

    growOld=()=>{
        this._age++;
    }

    age() {
        return this._age;
    }
}


const objperson1=new person(0); //object

//objectperson1.growOld();

const growOldss= objperson1.growOld;
growOldss();


console.log('age',objperson1.age());

