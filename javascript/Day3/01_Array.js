//* Creation of Array
let arr = [1, 2, 3, "New user", function () { console.log("Hello Jee") }, {
    fName: "New", lName: "User"
},true,undefined,null,0];

console.log(arr[8]);

let cars = new Array("BMW","Audi","Mercedes","Lamborgini");
console.log(cars[0],cars[1],cars[2]);

//* To string Function
console.log("String : ",cars.toString());
console.log("String Arr : ",arr.toString())
console.log("LocalString : ",cars.toLocaleString());
console.log("LocalString : ",arr.toLocaleString());

//* Difference to string and Local string
const numbers = [1234.56, 5678.9, 1234567.89];
const localizedRepresentation = numbers.toLocaleString();
console.log("Local String : ",localizedRepresentation); 

//* Arrays are objects
console.log(typeof arr);
console.log(typeof numbers);

console.log(cars.length);

//* For Loop
for(let i = 0;i <cars.length;i++){
    console.log(`array of ${i} : `,cars[i]);
}

//* Adding Elements
cars[cars.length] = "Swift"
cars[cars.length] = "Omini"

cars.push("SUV700");
cars.push("Desire Swift");



//* ForEach Loop
cars.forEach((value)=>{
    console.log("Array Value : ",value);
})

//* Holes in array
cars[13] = "new Car"
console.log(cars)
for(let i = 0;i <cars.length;i++){
    console.log(`array of ${i} : `,cars[i]);
}

//* Error with new Array
let newArr = new Array(40);
console.log(newArr[0]);
let newArr1 = [40];
console.log(newArr1[0]);

//* IsArray
console.log(Array.isArray(newArr));
console.log(Array.isArray(cars));
console.log(Array.isArray(arr));

console.log(arr instanceof Array);
console.log(cars instanceof Array);
console.log(newArr instanceof Array);


//* Associative Array
let person = [];
person["firstname"] = "john";
person["Lastname"] = "chen";
person["age"] = 60;
person.push(19)
console.log(person["age"])

//* some times behaves as object
person.forEach((val)=>{
    console.log(typeof(val)+val)
})

//* some times behave as array
for(let i = 0;i <person.length;i++){
    console.log(`array of ${i} : `,person[i]);
}

