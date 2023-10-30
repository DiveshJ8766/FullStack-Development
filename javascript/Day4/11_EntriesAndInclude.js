//? Entries
let alphabets = ['A','B','C','D','E','F','G','H','I'];

//* Aplhabets Entries
let iterator = alphabets.entries();
for(let val of iterator){
    console.log("Value : ",val);
}

console.log(`\n""""""""""""""""""""""""""""""\n`)

//* Next method in Array Iterator Object
let ans = alphabets.entries();
console.log("First : ",ans.next().value);
console.log("Second : ",ans.next().value);
console.log("Third : ",ans.next().value);
console.log("Fourth : ",ans.next().value);

//? Includes

let languages = ["Javascript","Java","Kotlin","C++","C","Go"];

console.log(`\n""""""""""""""""""""""""""""""\n`)

console.log("Includes : ",languages.includes("Java"));
console.log("Includes : ",languages.includes("JAVA"));
console.log("Includes : ",languages.includes("Ja"));

console.log(`\n""""""""""""""""""""""""""""""\n`)

console.log("Include With index : ",languages.includes("C++",-2));
console.log("Include With index : ",languages.includes("C++",-3));