//? Array Lenght
let fruits = ["Apple","Lemon","Banana","Mango","Kiwi","Dragonfruit"];
console.log(fruits);

//* Length
console.log(fruits.length);

//* tostring
let str = fruits.toString();
console.log(str);

//* Join
str = fruits.join(" + ")
console.log(str);

//* Push
fruits.push("strawberry","grapes","chiku");
fruits.push("watermelon");

console.log(fruits);
console.log(fruits.length)

//* pop
let popped = fruits.pop();
console.log("pop : ",popped);


//* Shift 
let newFruit = fruits.shift();
console.log(newFruit);
console.log(fruits);

console.log(fruits[1]);

//* Unshift
fruits.unshift("Orange");
console.log(fruits)

//* concat
let cars = ["BMW","Audi","Lamborgini"];
let cars1 = ["Fords","Swift","SUV700","Scropio"];

fruits = fruits.concat(cars);
console.log(fruits)

fruits = fruits.concat("MT15",cars,cars1,"Alto","Omini");
console.log(fruits);

fruits = [fruits,cars,cars1];
console.log(fruits);

//* Flatening Array
fruits = fruits.flat();
console.log(fruits);


//* Splice Method
fruits.splice(2,3);
console.log("Splice : ",fruits);

fruits.splice(-6,3);
console.log("Splice : ",fruits)

fruits.splice(3,3,"New Fruit","Added");
console.log(fruits)

let temp = fruits.splice(2);
console.log("Splice : ",fruits);

fruits = temp;


//* Slice Method
let a =fruits.slice(2);
console.log("a : ",a);

let b = fruits.slice(2,6);
console.log("b : ",b);

let c = fruits.slice(-2);
console.log("c :",c);

let d = fruits.slice(-6,-2);
console.log("d : ",d);

let e = fruits.slice(2,-3);
console.log("e : ",e);

//? Indexof 
console.log("Fruit : ",fruits)

console.log(fruits.indexOf("Alto"));
console.log(fruits.indexOf("Dragonfruit"));

//* Element present in array or not (Not recommended)
if(fruits.indexOf("Alto")!==-1){
    console.log("Element Present :)");
}else{
    console.log("Element Not Present :(");
}


console.log(fruits.indexOf("Alto",15));

//? Includes
console.log(fruits.includes("Alto"));