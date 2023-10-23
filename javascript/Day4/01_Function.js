//*Print Counting
printCounting(100);

function printCounting(no) {
    let i = 0;
    while (i <= no) {
        console.log("Number : ", i);
        i++;
    }
}

// console.log("Value of i : ",i);
// let i = 100;

//* Named Function
function walking(){
    console.log("Walking.....");
}

walking();

//* Anonynomous Function
let a = function(){
    console.log("Reading.....");
}
a();

//* we can call speak function
let b = function speak(){
    console.log("Speaking.....")
}
b();
// speak();


//* Funtion Hositing
// c();
let c = function(){
    console.log("Calling c .....");
}

let jump = c;
console.log("Jump : ",jump)
jump();