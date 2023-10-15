//? Search in array for object
// let persons = [first = {name:"divesh",age:23},second = {name:"vaibhav",age:25}];
// console.log(persons)

// console.log(persons.includes(first));
// console.log(persons.includes(second));

//* Object in Array
let persons = [{ name: "divesh", age: 23 }, { name: "vaibhav", age: 25 }];
console.log("Result : ", persons.includes({ name: "divesh", age: 23 }));

//* We have to use Callbacks

//? SetTimeout
function reading() {
    console.log("I'm Reading now...");
}


//* SetTimeout Interval ID
let intervalId = setTimeout(reading, 1000);
console.log("Interval ID : " + intervalId);
console.log("I'm Walking Now....");


//* Calling Function Again And Again
let stop;
function showTime() {
    let date = new Date();

    let time = date.toLocaleTimeString();

    console.log("Time : ", time);

    stop = setTimeout(showTime, 3000);
}

showTime();

//* Function with parameters
function showName(firstName, lastName) {
    console.log(`Hello  ${firstName} ${lastName}`);
}

setTimeout(showName, 5000, "New", "User");

console.log("Clearing Function call.....")
clearTimeout(stop);


//? CallBack Function 
function sleeping(name, callback) {
    console.log("I'm Sleeping.......")
    callback(name);
}

function walking(name) {
    console.log(name);
    console.log("I'm walking");
}

sleeping("Divesh Jadhav", walking);

//? SetInterval Method
function showText() {
    console.log("Showing Message ....");
}

setInterval(showText,6000);

//* Show time and cancel
let count = 0;

let intId = setInterval(function(fname,lname) {

    if (count == 5) {
        clearInterval(intId);
    }

    let date = new Date();

    let time = date.toLocaleTimeString();

    console.log(fname +" "+ lname,time);

    count++;
}, 6000,"Divesh","Jadhav");