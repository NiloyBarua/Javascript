//Bring Out All Value of this Array Using Forof loop
const friends = ['Elon','Bill','Mark','Warren'];
for (const friend of friends) {
    console.log(friend);
    
}
//Bring Out All Value of this Array Using For  loop
 for(let i = 0;i<friends.length;i++){
    console.log(i);
    console.log(friends[i]);
 }

//Reversing an array with reverse method
const numbers = [0,1,2,3,4,5,6,7];
numbers.reverse();
console.log(numbers);


//Reversing an array without reverse method
const numbers2 = [0,1,2,3,4,5,6,7];
const rev_numbers = [];
for (const num of numbers2) {
    rev_numbers.unshift(num);
}
console.log(rev_numbers);


//Reversing an array without reverse method(for loop)
const reversed = [];
for (let i = 0; i < numbers2.length; i++) {
    const num = numbers2[i];
    reversed.unshift(num);
}
console.log(reversed);



const persons = ['rakib','nakib','sakib','akib'];
const sorted = persons.sort();
console.log(sorted);

