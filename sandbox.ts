// explicit types
let character: string;
let age: number;
let isLoggedIn: boolean;

// age = 'mario'; // err
age = 30;

// isLoggedIn = 25; // err
isLoggedIn = true;
// ------------------------------------

// arrays
let ninjas: string[];
// the best practice to define at the start of the code an empty array:
let ninjas: string[] = [];
// then, we can do this:
ninjas.push('mario');

// ninjas = [10, 23]; // err
ninjas = ['mario', 'shaun']
// ------------------------------------

// union types
let mixed: (string|number)[] = []; // () --> needs before --> []
mixed.push(20);
// mixed.push(false); // err

let mixed: (string|number|boolean)[] = [];
mixed.push(false);
// ------------------------------------

let uid: string|number; // no need ()
uid = '123';
uid = 123;
// uid = true; // err
// ------------------------------------

// objects
let ninjaOne: object;
ninjaOne = { name: 'mario', age: 30 };
// ninjaOne = 'hello'; // err
// ninjaOne = []; // err --> it could be, because of an array type of an object, but it won't work with an already declared an object before

let ninjaTwo: {
    name: string,
    age: number,
    beltColor: string
}

ninjaTwo = { name: 'yoshi', age: 20, beltColor: 'black' };
// ninjaTwo = { name: 'yoshi', age: 20, beltColor: 'black', skills: 'fluing' }; // err --> not existing argument
