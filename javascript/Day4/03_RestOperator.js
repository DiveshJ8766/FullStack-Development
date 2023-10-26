//* Rest Operator
function sum(a,b,...args){
    console.log("Value of A : ",a);
    console.log("Value of B : ",b);
    console.log("Remaining Values : ",args);
}

sum(1,2,3,4);

let arr = [12,43,"Ashok","Purab"];
let a = ["New",...arr];
console.log("New Array : ",a);


// function add(a,...args,b){
//     console.log(a);
//     console.log(args);
//     console.log(b);
// }

// add(1,2,3,4,5,6,"New user","NASA");

// console.log("Lenght of Add : ",add.caller);

//* Default Paramter
function reading(p=2,q=4,r){
    console.log("No of Books Readed : ",p+q+r);
}

//* Getting parameter Values
reading(1,2,3);

//* using default Values
reading(1000,undefined,undefined);

//* No default Values
reading();
