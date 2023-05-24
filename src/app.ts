/**
 * --------------------------------
 *     #11 The DOM & Type Casting
 * --------------------------------
 * 
 * 
 * 
 */

const anchor = document.querySelector('a');

// console.log(anchor.href); // err --> possibly 'null'

// if(anchor) {
//  console.log(anchor.href); // get a link
// }

//  or
const anchorOne = document.querySelector('a')!; // add [ ! ] --> NOT a null
console.log(anchorOne.href);

// --------------------------------

// const form = document.querySelector('form')!;
const form = document.querySelector('.new-item-form') as HTMLFormElement; // cast a type of element --> as - never be a null

// console.log(fotmOne.children);

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