/**
 * --------------------------------
 *     #13 Public, Private & Readonly
 * --------------------------------
 * 
 * 
 * 
 */

// classes
// class Invoice {
//     readonly client: string; // read-only inside|outside the class, can NOT change value
//     private details: string; // CAN change ONLY INSIDE the class
//     public amount: number; // default, CAN read|change inside|outside the class

//     constructor(c: string, d: string, a: number) {
//         this.client = c;
//         this.details = d;
//         this.amount = a;
//     }

//     // methods
//     format() {
//         return `${this.client} owes $ ${this.amount} for ${this.details}`;
//     }
// }

class Invoice {
    constructor(
        readonly client: string,
        private details: string,
        public amount: number
    ) {}

    format() {
        return `${this.client} owes $ ${this.amount} for ${this.details}`;
    }
}

const invOne = new Invoice('mario', 'work on the web mario', 250);
const invTwo = new Invoice('luigi', 'work on the web luigi', 300);

// console.log(invOne, invTwo);
let invoices: Invoice[] = [];
invoices.push(invOne);
invoices.push(invTwo);

console.log(invoices);

invOne.client = 'yoshi';
invTwo.amount = 400;

console.log(invOne, invTwo);

invoices.forEach(inv => {
    console.log(inv.client, inv.amount, inv.format());
})

// -------------------------------------

const form = document.querySelector('.new-item-form') as HTMLFormElement;

// inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();

    console.log(
        type.value,
        tofrom.value,
        details.value,
        amount.valueAsNumber // translate value to a number
    )
})