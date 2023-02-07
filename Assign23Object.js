const Professor={
    name:'Ashitosh',
    age: 23,
    mark:100,

    degree:{
BTech:'Mechanical',
PHD:'Metology',
Adv:'Adv Computing',
add:function () {
    return this.BTech+this.PHD+this.Adv
},

certificate1:{
    certificate1 :'Haker Rank',
    certificate2 :'Robo Race',
    certificate3 :'advance computing',

}
}
}
console.log("Accessing and nested object function ");
const totalMarks=Professor.degree.add();
console.log(`Total marks : ${totalMarks}`);

Professor.HOD=2015;
console.log(`Add the property in certificate obj ==>${Professor}`);
const dele=delete Professor.certificate1.certificate1;
console.log(Professor.certificate1);
Professor.certificate1.company='cod mind'
console.log(`${Professor.certificate1}`);


console.log(`The nested obj in certificate is ${Professor.certificate1}`);

