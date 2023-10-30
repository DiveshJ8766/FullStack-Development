//? Every Method in Array
let numbers  = [1,2,23,13,14,41,6,65,85,24,21,32,6,1,5,20];

console.log("Every : ",numbers.every((value,index,arr)=>{
    return value < 100;
}))

//* Even Number
let num  = [2,4,6,8,10,12,24,6,8,13];
function checkEven(value){
    return value%2 === 0;
}

console.log("All Even : ",num.every(checkEven));

//? Some Method in Array
let age = [56,19,20,36,18,100,23];

console.log("Age are greater : ",age.some((value)=>{
    return value >= 18;
}))

//* student marks check
let marks = [98,21,34,67,40,67,98,56,79];

console.log("All student passed : ",marks.some((value)=>{
    return value < 35;
})=== true ? "False":"true" );


//? Indexof
let com = ["jay",12,13,26,325,"jay",12,13,"New USer"];

console.log("Position of Jay : ",com.indexOf("jay"));
console.log("Position of Jay : ",com.indexOf("jay",2));
console.log("Position of Jay : ",com.indexOf("suraj"));
console.log("Position of Jay : ",com.indexOf(13,-3));

console.log(`\n"""""""""""""""""""""""""""""""\n`)

//? Last Index of
console.log("Position of Jay : ",com.lastIndexOf("jay"));
console.log("Position of Jay : ",com.lastIndexOf("jay",2));
console.log("Position of Jay : ",com.lastIndexOf(2));
console.log("Position of Jay : ",com.lastIndexOf(12));
console.log("Position of Jay : ",com.lastIndexOf("New USer",-1));
