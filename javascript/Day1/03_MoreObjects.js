// * Adding Property to object
let person = {
    name: "divesh",
    age: 23,

    draw: function () {
        console.log("Drawing");
    },

    talk: function () {
        console.log("Talking");
    }
}

console.log(person);
person.hands = 2;
console.log(person);

// * Type of
console.log(typeof (person.name))


// * Deleting the Property
delete person.name;
console.log(person);


person = null;

console.log(person);

// ? All Functions in Javascript are Objects

function Fact(name, age) {
    this.name = name;
    this.age = age
}


let a = new Fact("Divesh Jadhav", 23);
console.log(a);


// ? Internal Working of Constructor
// * Constructor's constructor is Function

let fact1 = new Function("firstName", "age", `this.name = firstName;this.age = age;`);
let b = new fact1("Divesh Jadhav", 23);
console.log(b);

// * Normal Function
function run(name,age){
    console.log("Running!!!");
    console.log("Name : "+name+" & "+"Age : "+age);
}
run("divesh",23);

