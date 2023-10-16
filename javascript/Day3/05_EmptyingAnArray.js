//? Emptying An Array
let numbers1 = [1, 2, 3, 4, 5];
let numbers2 = numbers1;

let person = [
    { fname: "Vaibhav", lname: "Borse" },
    { fname: "Anand", lname: "Suryavanshi" },
]

let person2 = [
    { fname: "Yash", lname: "Chirmade" },
    { fname: "Divesh", lname: "Jadhav" }
];

numbers2.push(6);

console.log("Array 1 : ", numbers1);
console.log("Array 2 :", numbers2);

// numbers1 = [];

// console.log("Array 1 : ",numbers1);
// console.log("Array 2 :",numbers2);


//* First Method
// numbers1.length = 0;

// console.log("Array 1 : ",numbers1);
// console.log("Array 2 :",numbers2);

//* Second Method

// numbers1.splice(0,numbers1.length);

// console.log("Array 1 : ",numbers1);
// console.log("Array 2 :",numbers2);

//* Third Method

while (numbers1.length > 0) {
    numbers1.pop();
}
console.log("Array 1 : ", numbers1);
console.log("Array 2 :", numbers2);

//* Concat on Array
let first = ["BMW", "Scorpio", "Audi"];
let second = ["Mercedes", "SUV700"];

let third = first.concat(second);
console.log(third);

//* Concat on Object
let ab = person.concat(person2);
console.log("Person Object : ", ab);

//* Slice on Array
let fourth = third.slice(1, 4);
console.log(fourth);

let fifth = third.slice(2);
console.log(fifth);

let sixth = ab.slice();
console.log(sixth);

//* Slice On Object
fourth = ab.slice(1, 4);
console.log("Object Fouth : ", fourth);

fifth = ab.slice(2);
console.log("Object Fifth : ", fifth);

sixth = ab.slice();
console.log("Object Sixth : ", sixth);

//? Spread Operator
let values = ["New user", 12, 20, 38];
console.log("Values 1 : ", values);
console.log("Values 2 : ", ...values);

//* Copy Array
let values1 = [...values, "BMW", "Audi", "Mercedes", "Jagaur", "Nano"];
console.log(values1);

//* Clone Array
let persons1 = ["Vaibhav", "Yash", "Tushar", "Purab"];
let persons2 = [...persons1];

persons2.push("Anand", "Nayan");

console.log("Person 1 : ", (persons1));
console.log("Person 2 : ", persons2);

//* Spread Operator With objects
const obj1 = {
    name: "Vaibhav", age: 22
}

const obj2 = {
    name: "Anand", age: 22
}

const obj3 = {...obj1,...obj2};
console.log("Object 3 : ",obj3);

//* Rest Operator
function sum(...value){

    console.log(value instanceof Array);

    let sum = 0 ;
    value.forEach((val)=>{
        sum+= val;
    });
    console.log("Sum : ",sum) ;
    // console.log(value);
}

sum(3,4,5);
sum(3);
sum();
sum(1,2,3,4,5,6,7);


//* spread operator parameters
const arr = [1,2,3,4];

function add(x,y,z){
    console.log(x+" + "+y+" + ",z+" = ",x+y+z );
}

add(...arr);

