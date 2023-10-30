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