//Function Syntax
function fanOffKor(){
    console.log("Bosha theke uthe dara");
};
fanOffKor();

//Squaring Function
function square(num) {
    const square = num * num;
    console.log(square); 
}
square(4);

//Adding Function
function add(num1,num2){
    const sum = num1 + num2;
    console.log(sum);
}
const num1 = 54;
const num2 = 54;
add(num1,num2)

//Use of Return And Calling Function In a Variable
function multiply(num1,num2){
    const result = num1*num2;
    return result;
}
const output = multiply(65,78);
console.log(output);

//Conditional Return 
function isEven(number) {
    if (number%2===0) {
        return true;
    }
    else{
        return false;
    }
}
const outputDekhi = isEven(78);
console.log(outputDekhi);

//String Size Check
function evenSizedString(str){
    const size = str.length;
    console.log(str,size);
    if(size % 2 ===0){
        console.log('Even Size');
    }
    else{
        console.log('odd size');
        
    }
    
}
evenSizedString('Bangladesh');

// sum of all numbers in an array using function
function sumOfNumbers(numbers) {
    let sum = 0;
    for (const number of numbers) {
        console.log(number);
        sum = sum+number;
    }
    return sum;
}
const numb = [45,65,32,43]
var toBeGood = sumOfNumbers(numb);
console.log(toBeGood);

//Return all the even numbers of an array
function evenNumbersOnly(numbers) {
    let evens = [];
    for (const number of numbers) {
        if (number % 2 ===0) {
            console.log(number);
            evens.push(number)
        }
    }
    return evens;
}
const numbers = [5,76,34,2,1];
const evens = evenNumbersOnly(numbers);
console.log(evens);
