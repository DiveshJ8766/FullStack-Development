//? From

let newArray = Array.from("Javascript");
console.log("New Array : ",newArray);

let newArray1 = Array.from(["Javscript","React","React","Angular","Vue"])
console.log("New Array : ",newArray1);

let newArray2 = Array.from([1,2,3,4,5,6,7,8])
console.log("New Array : ",newArray2);

//* Map Function
let numbers = [1,2,3,4,5,6,7];
function addTwo(value){
    return value + 2;
}

let ans = Array.from(numbers,addTwo);
console.log("New Array : ",ans);

//* Set 
let newSet = new Set(["Javascript","Angular","React","Vue","React"]);

console.log("New Array : ",Array.from(newSet));

//?  keys Method of Array

let keys = numbers.keys();

for(let key of keys){
    console.log("Key : ",key);
}


console.log(`\n""""""""""""""""""""""""""\n`)

//* Null value index is counted
let num = [20,10,23,,89,53,19];

let iteartor = num.keys();
for(let key of iteartor){
    console.log("Key : ",key);
}

console.log(`\n""""""""""""""""""""""""""\n`)


//? Values Method of Array
let values = numbers.values();
for(let val of values){
    console.log("Value : ",val);
}

console.log(`\n""""""""""""""""""""""""""\n`)

let values1= num.values();
for(let val of values1){
    console.log("Value : ",val);
}

//* Values using next();
let fruits = ["Apple","Mango","Banana","Grapes","Orange"];

let iteartor1 = fruits.values();

console.log(iteartor1.next().value);

fruits[1] = "chiku";

console.log(iteartor1.next().value);

console.log(iteartor1.next().value);

