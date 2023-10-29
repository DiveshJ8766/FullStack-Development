//* Scopes
//? let and const scope is block scope

//? Let scope
// {
//     let a = 20;
//     console.log(a);
// }
// console.log(a); //* Error 

//? Var Scope
// {
//     var a = 32;
//     console.log("Value of A Inside the Block : ",a);
// }
// console.log("Value of A Outside the Block : ",a);

//? const scope
// {
//     const b = 32;
//     console.log("Value of A Inside the Block : ",b);
// }
// console.log("Value of A Outside the Block : ",b);

//? Function scope (Let)
// function run(){
//     let test = 90;
//     console.log("Value of Test inside the Function : ",test);
// }
// run()
// console.log("Value of test outside the Function : ",test);

//? Function Scope (const)
// function run(){
//     const test = 90;
//     console.log("Value of Test inside the Function : ",test);
// }
// run()
// console.log("Value of test outside the Function : ",test);

//? Function Scope (var)
// function run(){
//     var test = 90;
//     console.log("Value of Test inside the Function : ",test);
// }
// run()
// console.log("Value of test outside the Function : ",test);

//? If statement scopes
// if(true){
//     let a =5
//     console.log("Value of a inside : ",a);
// }
// console.log("Value of a outside : ",a);

// if (true) {
//     const a = 5
//     console.log("Value of a inside : ", a);
// }
// console.log("Value of a outside : ", a);

// if (true) {
//     var a = 8
//     console.log("Value of a inside : ", a);
// }
// console.log("Value of a outside : ", a);


//? For loop
// for(var i =0;i < 20;i++){
//     console.log("Inside : ",i);
// }
// console.log("Outside : ",i);


// for(let i = 0;i < 20;i++){
//     console.log("Inside : ",i);
// }
// console.log("Outside : ",i);


// for(const i = 0;i < 20;i++){
//     console.log("Inside : ",i);
// }
// console.log("Outside : ",i);

//? Two different varaible
function a(){
    const value = 10;
    console.log("Value inside a function : ",value);
}
a();

function b(){
    const value = 20;
    console.log("Value inside b function : ",value);
}
b();

//? Const 
const c = 25;
function ab(){
    const c = 30;
    console.log("Inside function const : ",c);
}
ab();
console.log("Outside Function const : ",c);