//Find the max number in an array
const heights = [65, 78, 98, 43, 12, 43];
function getMax(numbers) {
    let max = numbers[0];
    for (const num of numbers) {
        if (num > max) {
            max = num
        }
    }
    return max;
}
const max = getMax(heights);
console.log(max);

// Use add and multiplication to calculate wood requirements
function woodQuantity(chair, table, bed) {
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;
    const allChairWood = chair * perChairWood;
    const allTableWood = table * perTableWood;
    const allBedWood = bed * perBedWood;
    const totalWood = allChairWood + allBedWood + allTableWood;
    return totalWood;
}

const valueGive = woodQuantity(5, 8, 100);
console.log(valueGive);

//Find the cheapest phone from an array 
const prices = [20000, 43000, 870000, 20000, 234, 76000];
function getMin(numbers) {
    let min = numbers[0];
    for (const num of numbers) {
        if (num < min) {
            min = num;
        }
    }
    return min;
}
const cheap = getMin(prices);
console.log(cheap);


//Find the cheapest phone from an object
const phones = [
    { name: 'samsung', price: 2000, camera: '12mp', color: 'black' },
    { name: 'samsung', price: 1000, camera: '12mp', color: 'black' },
    { name: 'samsung', price: 5000, camera: '12mp', color: 'black' },
    { name: 'samsung', price: 54000, camera: '12mp', color: 'black' },
    { name: 'samsung', price: 200, camera: '12mp', color: 'black' }
]
function getCheapestPhone(phones) {
    let min = phones[0];
    for (const phone of phones) {
        if (phone.price < min.price) {
            min = phone
        }
    }
    return min;
}
const cheapest = getCheapestPhone(phones);
console.log(cheapest);


// Calculate the total cost of the products in a shopping cart
const products = [
    { name: 'Shampoo', price: 300, quantity: 4 },
    { name: 'Chiruni', price: 100, quantity: 4 },
    { name: 'Shirt', price: 7300, quantity: 4 },
    { name: 'pant', price: 1200, quantity: 4 },
]
function getShoppingTotal(products) {
    let total = 0;
    for (const product of products) {
        const eachPrice = product.price * product.quantity;
        total = total + eachPrice;
    }
    return total;
}
const total = getShoppingTotal(products);
console.log(total);

//Discount Calculator
function discountedPrice(quantity) {
    if (quantity <= 100) {
        const total = quantity * 100;
        return total;
    }
    else if (quantity <= 200) {
        const total = quantity * 90;
        return total;
    }
    else{
        const total = quantity *70;
        return total;
    }
}
const totalPrice = discountedPrice(50);
console.log(totalPrice);


//Layered Discount
function layeredDiscountedTotal(quantity){
    const first100Price = 100;
    const second100Price = 90;
    const above200Price = 70;

    if (quantity<=100) {
        const total = quantity * first100Price;
    }
    else if(quantity <=200){
        const first100Total = 100*first100Price;
        const remainingQuantity = quantity -100;
        const remainingTotal = remainingQuantity * second100Price;
        const total = first100Total+ remainingTotal;
        return total;
    }
    else{
        const first100Total = 100*first100Price;
        const second100Total = 100 * second100Price;
        const remainingQuantity = quantity -200;
        const remainingTotal = remainingQuantity * above200Price;
        const total = first100Total + second100Total + remainingTotal;
        return total ;
    }
}
const discountedValue = layeredDiscountedTotal(500);
console.log(discountedValue);

//Simple calculator to call function inside a function
function add(num1,num2){
    return num1 + num2;
}
function subtract(num1,num2){
    return num1-num2;
}
function multiply(num1,num2){
    return num1 * num2;
}
function divide(num1,num2){
    return num1/num2;
}

function calculator(a,b,operation){
    if(operation === 'add'){
        const result = add(a,b);
        return result;
    }
    else if(operation === 'subtract'){
        const result = subtract(a,b);
        return result;
    }
    else if(operation === 'multiply'){
        return multiply(a,b);
    }
    else if(operation === 'divide'){
        return divide(a,b)
    }
    else{
        return "not allowed"
    }
}
const result = calculator(5,6,'subtract');
console.log(result);




