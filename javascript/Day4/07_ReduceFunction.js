//? Reducing Array
//* Join array elements

let lang = ["Javascript", "is", "Fun"];
function joinString(accumulator, currentValue) {
    return accumulator + " " + currentValue;
}

console.log("String : ", lang.reduce(joinString));


//* Sum of Elements
let arr = [100, 20, 30, 50, 20, 484, 40];

function sum(accumulator, currentValue) {
    return accumulator + currentValue;
}

console.log("Sum : ", arr.reduce(sum));

//* Substract Number
let number = [10000, 20, 330, 2000, 3048];

console.log("Substraction : ", number.reduce((accumulator, currentValue) => {
    return accumulator - currentValue;
}));

//* Remove Duplicates from array
let array = [18, 21, 1, 1, 51, 18, 21, 5, 18, 7, 10];
let ans = array.reduce((accumulator, currentValue) => {
    if (accumulator.indexOf(currentValue) === -1) {
        accumulator.push(currentValue);
    }
    return accumulator;
}, []);

console.log("Unique Array : ", ans);


//* Group object by a property
let people = [
    { name: "John", age: 21 },
    { name: "Oliver", age: 55 },
    { name: "Michael", age: 55 },
    { name: "Dwight", age: 19 },
    { name: "Oscar", age: 21 },
    { name: "Kevin", age: 55 },
];

let groupedObj = people.reduce((accumulator,currentValue)=>{
    let key = currentValue["age"];
    if(!accumulator[key]){
        accumulator[key] = [];
    }
    accumulator[key].push(currentValue);
    return accumulator;
},{});

console.log("Object : ",groupedObj)