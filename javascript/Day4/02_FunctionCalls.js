//* Dynamic Nature 
let a = 20;
a = '20';

console.log("Value of A : ", a)
console.log("Type of A : ", typeof a)

//* Check for Function
function sum(a, b) {
    return a + b;
}

console.log("Sum of 3 and 5 : ", sum(3, 5));
console.log("Sum of 2 : ", sum(2)); //* 1 + undefined //* o/p => NaN
console.log("Sum : ", sum()); //* undefined + undefined //* o/p => NaN 
console.log("Sum : ", sum(1, 5, 2, 7, 8, 9)); //* other elements are neglected

//* Remaining Value of parameter in arguments
function values(a, b) {
    let total = 0;
    for (let val in arguments) {
        console.log("Val : ", val);
    }
    return a + b;
}
values(1, 2, 3, 4, 5, 5);
console.log("Final Result : ", values(1, 5, 5));



