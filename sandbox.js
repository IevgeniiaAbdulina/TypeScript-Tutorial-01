// explicit types
var character;
var age;
var isLoggedIn;
// age = 'mario'; // err
age = 30;
// isLoggedIn = 25; // err
isLoggedIn = true;
// ------------------------------------
// arrays
var ninjas;
// the best practice to define at the start of the code an empty array:
var ninjas = [];
// then, we can do this:
ninjas.push('mario');
// ninjas = [10, 23]; // err
ninjas = ['mario', 'shaun'];
// ------------------------------------
// union types
var mixed = []; // () --> needs before --> []
mixed.push(20);
// mixed.push(false); // err
var mixed = [];
mixed.push(false);
// ------------------------------------
var uid; // no need ()
uid = '123';
uid = 123;
// uid = true; // err
// ------------------------------------
// objects
var ninjaOne;
ninjaOne = { name: 'mario', age: 30 };
// ninjaOne = 'hello'; // err
// ninjaOne = []; // err --> it could be, because of an array type of an object, but it won't work with an already declared an object before
var ninjaTwo;
ninjaTwo = { name: 'yoshi', age: 20, beltColor: 'black' };
// ninjaTwo = { name: 'yoshi', age: 20, beltColor: 'black', skills: 'fluing' }; // err --> not existing argument
