const arr = [1,2,4,8,16];

var a = (Number(prompt("Enter Number")))

console.log(arr);
console.log(arr.includes(4));
if (arr.includes (a)) {
    console.log(`Yes, the number ${a} is in the array`)
} else {
    console.log(`No, the number ${a} is not in the array`)
}