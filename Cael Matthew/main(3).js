const names = ['jeevie', 'james', 'lyca', 'maria'];

const mixed = [1, 2, "jeevie", 'rebias', true];



console.log(names.splice(3,3));
console.log(names)
console.log(names.unshift('ronie','leenie'));
console.log(names)
console.log(names.splice(0,3));
console.log(names)

const numbers = [1,4,2,3,9,6];

console.log(numbers.splice(1,4));
console.log(numbers)
console.log(numbers.concat(names,mixed));
const Indexfinder = numbers.indexOf(6);

console.log(Indexfinder);
console.log(numbers.push(7,8,9,10));
console.log(numbers)
const Checkvalue = numbers.includes(6);

console.log(Checkvalue);

const names2 = ["jeevie", "jyles", "ape", "ken", "mark"];

const checkname = names2.includes("kite")
console.log(checkname);

const InOrder = names2.sort();
console.log(InOrder);

const arr = [1,10,6,4,9];

const numberorder = arr.sort((a,b)=>(a-b));
console.log(numberorder);

const Reverseorder = arr.reverse()
console.log(Reverseorder);