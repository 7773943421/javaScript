class Bank {
    constructor(bank_name,location,account_no,ifsc,instrest_rate) {
this.bank_name=bank_name,
this.location=location,
this.account_no=account_no,
this.ifsc=ifsc,
this.instrest_rate=instrest_rate
    }
}
console.log("B) create object ");
const Axis_bank=new Bank ("Axis_bank","pune","AXIS252455",534353,"3%" );
const SBI_bank=new Bank ("SBI_bank","mumbai","SBI258765",565433,"6%" );
const ICICI_bank=new Bank ("ICICI_bank","surat","icici875455",674353,"6%" );
const kotak_bank=new Bank ("Kotak_bank","pune","kotak524855",5874383,"5%" );
const panjab_bank=new Bank ("Panjab_bank","pune","panjab2765455",5904350,"4%" );
console.log(Axis_bank);
console.log(SBI_bank);
console.log(ICICI_bank);
console.log(kotak_bank);
console.log(panjab_bank);
console.log(" C ) create map in way that  key should ba bank account number and value is object:-");
const mapofbank = new Map(); 
mapofbank.set(534353, Axis_bank);
mapofbank.set(565433, SBI_bank);
mapofbank.set(674353, ICICI_bank);
mapofbank.set(5874383, kotak_bank);
mapofbank.set(5904350, panjab_bank);

const keymapofbank = mapofbank.keys();
console.log( keymapofbank);
console.log("D) traverse the map  ");
for (const key of  keymapofbank) {
    const banka=mapofbank.get(key);
    console.log(banka.bank_name,banka.account_no,banka.instrest_rate);

}

// for (const key of keyOfMapEmployee) {
//     const employee = mapOfEmployees.get(key);
//     console.log(employee.empName, employee.empCity);
// }

