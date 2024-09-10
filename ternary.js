var age = 12;
age >= 18 ? console.log("Vote") : console.log("dont do");

let price = 500;
const isLeader = true;
if (isLeader === true) {
    price = 0;
}
else {
    price = price + 100;
}
console.log(price);

//Same thing using ternary
price = isLeader === true ? 0 : price +100;
console.log(price);

