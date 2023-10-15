//? Find Method

//* With Object
let person = [
    { fname: "Vaibhav", lname: "Borse" },
    { fname: "Anand", lname: "Suryavanshi" },
    { fname: "Yash", lname: "Chirmade" },
    { fname: "Divesh", lname: "Jadhav" }
]

console.log("Include : ", person.includes({ fname: "Divesh", lname: "Jadhav" }));

function check(val, index, arr) {
    console.log("Value : ", val, "index : ", index, "Array : ", arr);

    console.log(this === contextObject);

    return val.lname === "Jadhav";
}

let contextObject = [1, 2, 4, 5]

console.log("Find : ", person.find(check, contextObject))


//* Check Even
let count = 0;
function isEven(value) {
    console.log("Count : ",count,"Value : ",value);
    count++;
    return value % 2 === 0;
}

const arr = [1, , 3, , , 5, 7, 9, 8];

console.log("Iseven : ", arr.find(isEven));

console.log("IsEven : ", arr.find((value) => value % 2 == 0));