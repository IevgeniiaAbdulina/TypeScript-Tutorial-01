// arrays
var names = ['luigi', 'mario', 'yoshi'];
// when we declared an array with one type - the array can have only one type
names.push('toad');
// names.push(3); // error
// name[0] = 3; // error
// names = 'mario'; // err
var numbers = [10, 20, 30, 40];
numbers.push(25);
// numbers.push('shaun'); // err
// numbers[0] = 'shaun'; // err
var mixed = ['ken', 4, 'chun-li', 8, 9];
mixed.push('ryu');
mixed.push(10);
mixed[0] = 3;
// objects
var ninja = {
    name: 'mario',
    belt: 'black',
    age: 30
};
ninja.age = 40;
ninja.name = 'ryu';
// ninja.age = '30'; // err
// ninja.skills = ['fighting', 'sneaking']; // don't exist obj property
// modify an object
ninja = {
    name: 'yoshi',
    belt: 'orange',
    age: 40
};
