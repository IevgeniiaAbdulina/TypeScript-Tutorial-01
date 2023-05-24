"use strict";
/**
 * --------------------------------
 *     #12 Classes
 * --------------------------------
 *
 *
 *
 */
// classes
class Invoice {
    constructor(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    // methods
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
