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