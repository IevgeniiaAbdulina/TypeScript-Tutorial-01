/**
 * Compiling TypeScript:
 * 
 * in bash:
 * > tsc sandbox.ts sandbox.js
 * > tsc sandbox.ts // with the same name
 * 
 * to run it ones
 * > tsc sandbox.ts -w
 * 
 */

const character = 'luigi';
console.log(character);

const inputs = document.querySelectorAll('input');
console.log(inputs)

inputs.forEach(input => {
    console.log(input)
})