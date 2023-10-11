let a = 12;
let b = a;

a++;

//* Primitive types are Always Pass by Value
console.log("Value of A : ",a);
console.log("Value of B : ",b);


let obj = {
    value :18
}
let objValue = obj;

obj.value++;

//* Assigniment of Reference Type pass by reference
console.log("Value : ",obj.value);
console.log("Value of Reference",objValue.value);

//* Passing Primitive Type in Function

let val = 10;
console.log("Value of a : ",val);

//* Passing reference type in function
let obj1 = {val:15,firstName:"Prathi"};
console.log("Value of Obj1 Val : ",obj1.val)
console.log("FirstName Outside Function : ",obj1.firstName);

//* Function of Increment
function increment(val,obj1){
    val++;
    obj1.val++;
    obj1.firstName = "Prathiksha"
    console.log("Value of a Inside Function : ",val);
    console.log("Value of Object Val : ",obj1.val);
    console.log("FirstName Inside Function : ",obj1.firstName);
}
increment(val,obj1);

console.log("Value of a : ",val)
console.log("Value of Obj val : ",obj1.val);
console.log("FirstName of Obj : ",obj1.firstName);