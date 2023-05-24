/**
 * --------------------------------
 *     #15 Interfaces
 * --------------------------------
 *
 *
 *
 */
import { Invoice } from './classes/Invoice.js';
const me = {
    name: 'shaun',
    age: 30,
    speak(text) {
        console.log(text);
    },
    spend(amount) {
        console.log('i spend', amount);
        return amount;
    }
};
// let someone: IsPerson;
const greetPerson = (person) => {
    console.log('hello', person.name);
};
greetPerson(me);
console.log(me);
// -------------------------------------
const invOne = new Invoice('mario', 'work on the web mario', 250);
const invTwo = new Invoice('luigi', 'work on the web luigi', 300);
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
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
