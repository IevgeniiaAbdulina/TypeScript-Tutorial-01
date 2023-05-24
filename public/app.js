"use strict";
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
const anchorOne = document.querySelector('a'); // add [ ! ] --> NOT a null
console.log(anchorOne.href);
// --------------------------------
// const form = document.querySelector('form')!;
const form = document.querySelector('.new-item-form'); // cast a type of element --> as - never be a null
// console.log(fotmOne.children);
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
