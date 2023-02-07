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
let  bank2=new Bank('sbi_bank','phanderpur',9875865347,345,99)
let bank3=new Bank ('icici_bank','solapur',09586746297,798,34)
let bank4=new Bank('kotak_bank','pune',758439798,3453,76)
let bank5=new Bank('hdfc_bank','mumbai',896397638,3456,22)
let bank6=new  Bank('panjab_bank','kholapur',75425498,8064,88)



const array=[bank1,bank2,bank3,bank4,bank5,bank6]
for (const k of array) {
    console.log(`${k.bank_name} and location is ${k.locatin}`);
}


const array1=[bank1,bank2,bank3,bank4,bank5,bank6]
bank1 instanceof Bank

for (const p of array1) {
    if (p.bank_name=='kotak_bank') {
        console.log(p);
    }
}