// * Object Creation

const rectangle = {
    lenght: 1,
    breadth: 2,
    color: "",
    draw: function () {
        console.log("This is Rectangle!!!");
    },
    setColor(color) {
        this.color = color;
        console.log("Color : " + this.color);
    }
};

// * Object Calls

rectangle.draw();
rectangle.setColor("Lightgreen");


// * Factory Function
function createPerson() {
    const person = {
        name: "Divesh",
        age: 21,
        walking: function () {
            console.log("Walking !!!");
        },
        reading: function () {
            console.log("Reading !!!");
        },
        talking: function () {
            console.log("Talking !!!")
        }
    }
    return person;
}

let person1 = createPerson();
console.log(person1)
person1.walking();


// * Factory function with parameters

function createPersonWithParameter(name, age) {
    const person = {
        name,
        age,
        walking: function () {
            console.log(name + " is Walking !!!");
        },
        reading: function () {
            console.log(name + " is Reading !!!");
        },
        talking: function () {
            console.log(name + " is Talking !!!")
        }
    }

    return person;
}
let per1 = createPersonWithParameter("Divesh Jadhav", 23);
let per2 = createPersonWithParameter("Vaibhav Borse", 26);

console.log("Person 1 : ", per1);
console.log("Person 2 : ", per2);

per1.walking();
per2.talking();


// * Constructor Function
function Rectangle(){
    this.lenght = 2;
    this.breadth =3;
    this.draw = function(){
        console.log("Calling from lenght "+this.lenght+" and Breadth "+this.breadth);
    }
}


// * Constructor Fucntion With Parameter
function RectangleWithParameter(lenght,breadth){
    this.lenght = lenght;
    this.breadth = breadth;
    this.draw = function(){
        console.log("Calling from lenght "+this.lenght+" and Breadth "+this.breadth);
    }
}

let b = new RectangleWithParameter(5,6);
b.draw()
console.log(b.lenght);

let b1 = new RectangleWithParameter(12,5);
console.log(b1.breadth)
b1.draw();