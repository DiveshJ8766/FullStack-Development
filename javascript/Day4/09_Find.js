//? Find method

//* Even Number Function
function isEven(elements) {
    return (elements % 2) === 0;
}

//* Odd Number Function
function isOdd(elements) {
    return (elements % 2) === 1;
}

//* Numbers Array
let numbers = [3, 1, 2, 3, 4, 5, 7, 8, 10, 12];

//* Even Number
let even = numbers.find(isEven);
console.log("First Even Number : ", even);

//* Odd Number
let odd = numbers.find(isOdd);
console.log("First Odd Number : ", odd);


//* Find age in object
let persons = [
    { name: "Yash", age: 20 },
    { name: "Vaibhav", age: 21}, 
    { name: "Purab", age: 22 }, 
    { name: "Divesh", age: 23 }, 
];

//* Searching Age
function search(person){
    return person.age > 21;
}

//* Destructing Array
function search1({age}){
    return age > 22;
}

let per = persons.find(search);
console.log("First Person Having age Greater than 22 : ",per);


let per1 = persons.find(search1);
console.log("First Person Having age Greater than 22 : ",per1);
