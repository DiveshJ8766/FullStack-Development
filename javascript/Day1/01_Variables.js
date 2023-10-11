let arr = [23,"Divesh",true,false,'a'];

// * output : Undefined
console.log(arr[5]);


let lname = 'divesh';
console.log(lname);
//* output : divesh


// * Scope of Var and Let Keyword

//* Let Keyword (Blocked Scope)
function greet(){
    let a = 5;
    if(a == 5){
        let a = 7;
        console.log("Inside a Value : ",a);
    } 
    console.log("Outside a Value : ",a);
}

greet();


//* Var Keyword (Function Scope)
function greet1(){
    var a = 5;
    console.log("Value of a At starting : ",a)
    if(a == 5){
    console.log("Value of a At starting : ",a)
        var a = 7;
        console.log("Inside a Value : ",a);
    } 
    console.log("Outside a Value : ",a);
}

greet1();


// * Constant Keyword
const ab = 10;
console.log(ab);

// a =15;
console.log(ab);

// * undefined Value

var num;
console.log("Value of Number : ",num);

//* let reassignment
let value1 = 7;
console.log("Value : ",value1);

value1 = "Divesh Jadhav"
console.log("Value : ",value1);

value1 = true;
console.log("Value : ",value1);


// * Reference Type 
//* Object
const person = {
    name:"Divesh",
    age:23,
    show: function(){
        console.log("Your're a Good Boy!!!");
    }
}

console.log(person.name);
console.log(person.age);


person.show();

console.log(person["name"]);
console.log(person["age"]);

//* Arrays
let car = [20,"wheels",13,"BMW",function(){
    console.log("New User");
},true,undefined,null];

car[4]()

console.log(car[6]);
console.log(car[3]);

// * Accessing Elements of Array 
let Car = [20,20,function(){
    console.log("Hello Everyone")
},true,undefined,null,"Hello Jee"];

Car[10] = 30;

for(let i = 0;i <= 10;i++){
    console.log(Car[i]);
}

//* Operators In Javascript
let a = 5; //*a=6 //*a=7 //*a=8 //*a=9
let b = 10;//*b=9 //*b=8 //*b=7 //*b=6

let ans1 = (++a) * (--b);
console.log("Ans : ",ans1); //* (6*9)=54

let ans2 = (a++) * (--b);
console.log("Ans : ",ans2); //* (6*8)=48

let ans3 = (a++) * (b--);
console.log("Ans : ",ans3); //* (7*8)=56

let ans4 = (++a) * (b--);
console.log("Ans : ",ans4); //* (9*7)=63

console.log("Value of a : ",a);
console.log("Value of b : ",b);


//* Loose Equality 
let num1 = 16;
let num2 = '16';

if(num1 == num2){
    console.log("True");
}else{
    console.log("False");
}

//* Strictly Equality
if(num1 === num2){
    console.log("True");
}else{
    console.log("False");
}

//* Ternary Operator
if(num1 >= 18){
    console.log("You can Vote!!!");
}else{
    console.log("You can't Vote!!!");
}