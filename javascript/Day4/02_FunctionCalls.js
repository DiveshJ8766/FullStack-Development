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
    for (let key in arguments) {
        console.log("Val : ", arguments[key]);
    }
    return a + b;
}
values(1, 2, 3, 4, 5, 5);
console.log("Final Result : ", values(1, 5, 5));


//* Argument Object
function addition() {
    let total = 0;

    for (let key in arguments) {
        total += arguments[key];
    }

    return total;
}

console.log("Addition : ", addition(1, 2, 4, 5, 6));

//* Changes in Argument Object
function add(a, b, c) {
    a = 20;
    arguments[0] = 70;
    console.log("a : ", a, "b : ", b, "c : ", c);
    console.log("arg[0] : ", arguments[0], "arg[1] : ", arguments[1], "arg[2] : ", arguments[2]);
    let ans1 = a + b + c;
    let ans2 = arguments[0] + arguments[1] + arguments[2];

    console.log(ans1, " ", ans2)
}
add(1, 2, 3);

//* No Changes Effect when used rest or default Values
function add1(...args) {
    args[0] = 34; args[2] = 14;
    arguments[0] = 76; arguments[1] = 90;
    console.log("args[0] : ", args[0], "b : ", args[1], "c : ", args[2]);
    console.log("arg[0] : ", arguments[0], "arg[1] : ", arguments[1], "arg[2] : ", arguments[2]);
    console.log(args[0] + args[1] + args[2], " ", arguments[0] + arguments[1] + arguments[2]);

}

add1(1, 2, 3);


function test() {
    console.log(arguments.callee);
    console.log(arguments.length);
}

test(1, 2, 3);

//* Arrow Function dont have argument Object
let ans = () => {
    console.log(arguments[0], arguments[1])
}

ans(1, 2, 4, 4);