"use strict";
/**
 * --------------------------------
 *     #8 Function Basics
 * --------------------------------
 *
 *
 *
 */
let greetOne = () => {
    console.log('hello');
};
// greetOne = 'hello'; // err
// --------------------------------
let greet;
greet = () => {
    console.log('hello, again');
};
// ? --> optional parametr, last one
// or
// string = 10 --> default value
const add = (a, b, c = 10) => {
    // when nothing to return --> (): void
    console.log(a + b);
    console.log(c);
};
add(5, 10, '20');
// add(5, '10'); // err
// --------------------------------
const minus = (a, b) => {
    return a + b;
};
let result = minus(10, 7); // automatically return a function type --> number or we can declare func return type (): number.
// result = 'result string'; // err
