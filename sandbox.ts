let character = 'mario';
let age = 30;
let isBlackBelt = false;

// character = 20; // error - not a 'string'
character = 'luigi';

// age = 'yoshi'; // error - Type 'string' is not assignable to type 'number'.
age = 40;

// isBlackBelt = 'yes'; // error - Type 'string' is not assignable to type 'boolean'.
isBlackBelt = true;

const circ = (diameter: number) => {
    return diameter * Math.PI;
}

// console.log(circ('hello')); // error
console.log(circ(7.5));
