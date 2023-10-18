//* Sort String Numbers
const numbers = ["5","6","1","2","3","4","10","30","25","20"];
const sorted = numbers.map(Number).sort((a,b)=> a - b);
console.log(sorted);
