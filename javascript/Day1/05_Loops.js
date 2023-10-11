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


console.log(`"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""`)
//* Making set as Array
console.log([...myset])


//* For each
let text = "";
myset.forEach((value) => {
    text += value + " + Hello \n";
})
console.log(text);

//* delete set value
myset.delete(23);

console.log(`"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""`)

//* looping through Set of Array
for (let key of myset) {
    console.log("Value of Array : ", key)
}

console.log(`"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""`)
//* Values 
let it = myset.values();

for (let key of it) {
    console.log("Iteratable : ", key)
}

console.log(`"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""`)
//* Entries 
let val = myset.entries();
for (let key of val) {
    console.log("Entries : ", key)
}

console.log(`"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""`)
//* Keys Same as Values
let ans = myset.keys();
for (let key of ans) {
    console.log("Keys : ", key)
}


console.log(`"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""`)
//* Size And clear 
myset.clear();
console.log(myset.size)

console.log(`"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""`)
//* Sets are Objects
console.log(myset instanceof Set);


console.log(`"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""`)
//* creation of map

let myMap = new Map();

myMap.set("first", person)
myMap.set("second", 23);
myMap.set("Third", 43);

//* for each 
myMap.forEach((value, key) => {
    console.log("Key : " + key + " and Value : ", value)
})

console.log(`"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""`)

//* Entries
let itemValues = myMap.entries();
for (let [key, value] of itemValues) {
    console.log("Key : " + key + " and Value : ", value)

}

//* Values
let item = myMap.values();
for (let ans of item) {
    console.log(ans);
}

//* Keys
let keys = myMap.keys();
for (let ans of keys) {
    console.log(ans);
}

//* Type and Instance
console.log(typeof(myMap))
console.log(myMap instanceof Map);

//* has
console.log(myMap.has("first"));
console.log(myMap.has("second"));

//* Object as keys
const person1 = {name:"Nayan",age:23};
const person2 = {name:"Vaibhav",age:34};
const person3 = {name:"Yash",age:30};

let nextMap = new Map();

nextMap.set(person1,"Nayan Jadhav");
nextMap.set(person2,"Vaibhav Borse");
nextMap.set(person3,"Yash Chirmade");

console.log("Value is : ",nextMap)

nextMap.forEach((value,key)=>{
    console.log(value,key);
})

//* get values
console.log(person1);
console.log(person2);
console.log(person3);

//* size and clear
console.log(nextMap.size);

nextMap.clear();

console.log(nextMap.size);
