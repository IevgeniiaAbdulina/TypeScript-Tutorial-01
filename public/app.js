"use strict";
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
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.client} owes $ ${this.amount} for ${this.details}`;
    }
}
const invOne = new Invoice('mario', 'work on the web mario', 250);
const invTwo = new Invoice('luigi', 'work on the web luigi', 300);
// console.log(invOne, invTwo);
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
console.log(invoices);
invOne.client = 'yoshi';
invTwo.amount = 400;
console.log(invOne, invTwo);
invoices.forEach(inv => {
    console.log(inv.client, inv.amount, inv.format());
});
// -------------------------------------
const form = document.querySelector('.new-item-form');
// inputs
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber // translate value to a number
    );
});
