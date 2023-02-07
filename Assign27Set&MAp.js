const fruit_seasonal =["Banana","Orange","Apple","Mango","Water Melon"]
let frist=fruit_seasonal[0];
let last=fruit_seasonal[fruit_seasonal.length-1]
console.log(`The frist element is ${frist} last is ${last}`);
console.log('=============Array and Map============');
class Bank {
    bank_name;
    locatin;
    account_no;
    ifsc;
    intrest_rate;
    constructor(bank_name,locatin,account_no,ifsc,intrest_rate){
this.bank_name=bank_name;
this.locatin=locatin;
this.account_no=account_no;
this.ifsc=ifsc;
this.intrest_rate=intrest_rate;
    }
}
let bank1=new Bank('axis_bank','sangola',5947858927,123,12)
let bank2=new Bank('sbi_bank','phanderpur',9875865347,345,99)
let bank3=new Bank ('icici_bank','solapur',09586746297,798,34)
let bank4=new Bank('kotak_bank','pune',758439798,3453,76)
let bank5=new Bank('hdfc_bank','mumbai',896397638,3456,22)
let bank6=new  Bank('panjab_bank','kholapur',75425498,8064,88)



let con=new Set()
con.add(bank1);
con.add(bank2);
con.add(bank3);
con.add(bank4);
con.add(bank5);
con.add(bank6);
console.log(con);
for (const k of con) {
    console.log(`${k.bank_name} and ifsc code is ${k.ifsc}`);
}


let map_name=new Map();
map_name.set(bank1.bank_name,bank1)
map_name.set(bank2.bank_name,bank2);
map_name.set(bank3.bank_name,bank3);
map_name.set(bank4.bank_name,bank4);
map_name.set(bank5.bank_name,bank5);
map_name.set(bank6.bank_name,bank6);
console.log(map_name);
console.log("==========The values are==========");
for (const value of map_name) {
    console.log(value);
}


console.log('============4============');
for (const p of map_name) {
    if (p.bank_name=='kotak_bank') {
        console.log(p);
    }
}
