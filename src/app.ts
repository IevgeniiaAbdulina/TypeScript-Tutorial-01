/**
 * --------------------------------
 *     #20 Tuples
 * --------------------------------
 * 
 * 
 * 
 */
import { Invoice } from './classes/Invoice.js';
import { ListTemplate } from './classes/ListTemplate.js';
import { Payment } from './classes/Payment.js';
import { HasFormatter } from './interfaces/HasFormatter.js';

const form = document.querySelector('.new-item-form') as HTMLFormElement;

// inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

// list template instance
const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul);

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();

    let values: [string, string, number];
    values = [tofrom.value, details.value, amount.valueAsNumber];

    let doc: HasFormatter;

    if(type.value === 'invoice') {
        doc = new Invoice(...values);
    } else {
        doc = new Payment(...values);
    }

    list.render(doc, type.value, 'end');
})

// ----------------------------
// TUPLES
//  -- we CAN NOT change a position in tuple

let arr = ['err', 25, true];
arr[0] = false; // we know a position in array

// let tup: [string, number, boolean] = [40, 25, true]; // error

let tup: [string, number, boolean] = ['err', 25, true];

// tup[0] = false; // err --> not allowde to change a type
tup[0] = 'notError'; // can change value

let student: [string, number];
// student = [123456, 'chun-li']; // err
student = ['chun-li', 123456];