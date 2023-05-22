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
var character = 'luigi';
console.log(character);
var inputs = document.querySelectorAll('input');
console.log(inputs);
inputs.forEach(function (input) {
    console.log(input);
});
