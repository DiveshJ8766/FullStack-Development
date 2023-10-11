//* For in loop
let person = {
    firstName: null,
    lastName: null,
    age: 23,
    setName: function (firstName = "Yash", lastName = "Chirmade") {
        this.firstName = firstName;
        this.lastName = lastName;
    },
    getName: function () {
        console.log("Name of Person : " + this.firstName + " " + this.lastName);
    }
}

person.setName("Divesh", "Jadhav")
person.getName();

// * For in loop in Object
for (let key in person) {
    if (typeof (person[key]) == 'function') {
        person[key]("New", "User");
    } else {
        console.log(`${key} => ${person[key]}`);
    }
}


//* For in loop in string
let str = "Divesh Jadhav";
for (let key in str) {
    console.log(`${key} => ${str[key]}`);
}

//* For in loop in Array
let arr = [12, "Divesh", true, undefined, null, 0, '0', -0, function () {
    console.log("Hello Jee");
}];

// for (let key in arr) {
//     if (typeof (arr[key]) == 'function') {
//         arr[key]();
//     } else {
//         console.log(`${key} => ${arr[key]} and it type is ${typeof (arr[key])}`);
//     }
// }

//* For of loop in Array
for (let key of arr) {
    console.log(`Values of Array : ${key} and it's Type ${typeof (key)}`);
}

//* For of loop in string
for (let key of "string") {
    console.log(key);
}


//* Set
let myset = new Set();
myset.add(23);
myset.add("Divesh Jadhav");
myset.add(undefined);
myset.add(function () { console.log("Hello Jee") });
myset.add(-0);
myset.add("Divesh Jadhav")
myset.add(23)

console.log("Values of Set : ", myset);

console.log(typeof (myset))
console.log(myset.has(23))

//* Making set as Array
console.log([...myset])


//* delete set value
myset.delete(23);

//* looping through Set of Array
for (let key of myset){
    console.log("Value of Array : ",key)
}

