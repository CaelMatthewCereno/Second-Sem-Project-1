
function array(){
    const arr = [1,2,4,8,16];

var a = (Number(prompt("Enter Number")))

console.log(arr);
console.log(arr.includes(4));
if (arr.includes (a)) {
    console.log(`Yes, the number ${a} is in the array`)
} else {
    console.log(`No, the number ${a} is not in the array`)
}
}

for (let i = 0; i < 2; i+= 1) {
    array();
}



function calculateDiscountedPrice() {
    var b = Number(prompt("Enter Price")); 
    var c = Number(prompt("Enter Discount"));

    var discount = (b * c) / 100;

    var discountedPrice = b - discount;

    return { discountedPrice, discountPercentage: c };
}



function displayTotal() {
    var result = calculateDiscountedPrice();
    console.log(`The total price after a ${result.discountPercentage}% discount is: PHP ${result.discountedPrice.toFixed(2)}`);
}


displayTotal()


function squareNumber(num1){
    console.log(num1*num1)
    
}
squareNumber(4)