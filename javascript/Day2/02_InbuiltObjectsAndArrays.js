//? Math Object

//* Math Constants
console.log("PI Value Constant : ", Math.PI);
console.log("Eulers Number : ", Math.E);
console.log("Square Root of 2 : ", Math.SQRT2);
console.log("Square Root of 1/2 : ", Math.SQRT1_2);
console.log("Log of 2 of Eluers Number : ", Math.LOG2E)
console.log("Log of 10 Of Eluers Number : ", Math.LOG10E);
console.log("Log of 2 : ", Math.LN2);
console.log("Log of 10 : ", Math.LN10);

console.log(`"""""""""""""""""""""""""""""""""""`);
//* Math Methods Round
console.log("Round : ", Math.round(4.));
console.log("Round : ", Math.round(4.4));
console.log("Round : ", Math.round(4.3));
console.log("Round : ", Math.round(4.6));
console.log("Round : ", Math.round(4.7));
console.log("Round : ", Math.round(4.8));
console.log("Round : ", Math.round(4.9));
console.log("Round : ", Math.round(4));
console.log("Round : ", Math.round(-4));
console.log("Round : ", Math.round(5));
console.log("Round : ", Math.round(-5));

console.log(`"""""""""""""""""""""""""""""""""""`);
//* Math Methods Ceil
console.log("Ceil : ", Math.ceil(4.5));
console.log("Ceil : ", Math.ceil(4.4));
console.log("Ceil : ", Math.ceil(4.3));
console.log("Ceil : ", Math.ceil(4.6));
console.log("Ceil : ", Math.ceil(4.7));
console.log("Ceil : ", Math.ceil(4.8));
console.log("Ceil : ", Math.ceil(4.9));
console.log("Ceil : ", Math.ceil(-4.1));
console.log("Ceil : ", Math.ceil(4));
console.log("Ceil : ", Math.ceil(5));
console.log("Ceil : ", Math.ceil(-5.9));


console.log(`"""""""""""""""""""""""""""""""""""`);
//* Math Method Floor
console.log("Floor : ", Math.floor(4.5));
console.log("Floor : ", Math.floor(4.4));
console.log("Floor : ", Math.floor(4.3));
console.log("Floor : ", Math.floor(4.6));
console.log("Floor : ", Math.floor(4.7));
console.log("Floor : ", Math.floor(4.8));
console.log("Floor : ", Math.floor(4.9));
console.log("Floor : ", Math.floor(-4.1));
console.log("Floor : ", Math.floor(4));
console.log("Floor : ", Math.floor(5));
console.log("Floor : ", Math.floor(-5.9));


console.log(`"""""""""""""""""""""""""""""""""""`);
//* Math Method Turnc
console.log("Turnc : ", Math.trunc(4.5));
console.log("Turnc : ", Math.trunc(4.4));
console.log("Turnc : ", Math.trunc(4.3));
console.log("Turnc : ", Math.trunc(4.6));
console.log("Turnc : ", Math.trunc(4.7));
console.log("Turnc : ", Math.trunc(4.8));
console.log("Turnc : ", Math.trunc(4.9));
console.log("Turnc : ", Math.trunc(-4.6));
console.log("Turnc : ", Math.trunc(4));
console.log("Turnc : ", Math.trunc(5));
console.log("Turnc : ", Math.trunc(-5));


console.log(`"""""""""""""""""""""""""""""""""""`);
//* Signs
console.log(Math.sign(22.7));
console.log(Math.sign(0));
console.log(Math.sign(-22.7));
console.log(typeof (Math.sign(22.7)));
console.log(typeof (Math.sign(0)));
console.log(typeof (Math.sign(-22.7)));


console.log(`"""""""""""""""""""""""""""""""""""`);
//* Pow
function power(no1, no2) {
    let ans = 1;
    for (let i = 1; i <= no2; i++) {
        ans *= no1;
    }
    return ans;
}

let ans = power(9, 8);
console.log(ans);
console.log(Math.pow(2, 3));
console.log(Math.pow(9, 8));

console.log(`"""""""""""""""""""""""""""""""""""`);
//* sqrt
console.log(Math.sqrt(64));
console.log(Math.sqrt(49));
console.log(Math.sqrt(25));


console.log(`"""""""""""""""""""""""""""""""""""`);
//* Random
console.log(Math.floor(Math.random() * 10));

console.log(`"""""""""""""""""""""""""""""""""""`);
//* Min
console.log(Math.min(0, 1, 2, 200, 200, -200, -22, 12));

console.log(`"""""""""""""""""""""""""""""""""""`);
//* Max
console.log(Math.max(123, 1200, 140, 484, 672, 3993, 0));


console.log(`"""""""""""""""""""""""""""""""""""`);

//? String Objects
let str = "This is new paragraphy";
console.log(typeof str);

let str1 = new String();
console.log(typeof str1);

let str2 = new String();
console.log(typeof str2);

//* Object are never same because of there reference
console.log(str1 === str2);
console.log(str1 == str2);

//* Convert String into object string
//* Method 1 => string Constructor
let message = "This is message";
let msgStr = new String(message);

console.log(typeof msgStr);
console.log(msgStr instanceof String);


//* Method 2 => Object Method
let msgObj = Object(message);
console.log(typeof msgObj);
console.log(msgObj instanceof String);

//* Breaking Code Uisng blackslash(\) and (+) addition operator

let message1 =
    "Lorem ipsum dolor sit ametconsectetur adipiscing elit. \
    Proin eget quam vel quam fringilla tincidunt. Sed tincidunt \
     vestibulum sem a tincidunt."

console.log(message1.length);

