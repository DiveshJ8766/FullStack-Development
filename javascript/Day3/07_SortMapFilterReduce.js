//? Sorting In Array
const personNames = ["Alice", "Anna", "Amy", "Brian", "Bob", "Charlie", "Daniel", "David", "Eve", "Frank", "Grace", "George", "Hannah", "Ivy", "Jack", "Katherine", "Liam", "Mia", "Noah", "Olivia", "Parker", "Quinn", "Riley", "Sophia", "Thomas", "Ursula", "Victoria", "William", "Xander", "Yvonne", "Zoe"];

//* Sort
personNames.sort();
console.log("Sorted Names : ", personNames);

//* Reverse Sort
personNames.reverse();
console.log("Desc Sort : ", personNames);


//? Compare  Function
const points = [90, 24, 70, 60, 50, 100, 10, 24, 34];

console.log("Wrong Sort : ", points.sort());

//*  ascending Sort
console.log("ascending Sort : ", points.sort(function (a, b) {
    return a - b;
}))

//* descending Sort
console.log("descending Sort : ", points.sort(function (a, b) {
    return b - a;
}))

//*Random Sort (Method 1)
console.log("Random Sort : ", points.sort(function () {
    return (0.5 - Math.random())
}))

//* Fishers Yate (Method 2)
for (let i = points.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i));
    let k = points[i];
    points[i] = points[j];
    points[j] = k;
}
console.log("Fishers Yate : ", points);

//* Lowest Value and Highest Value ascending Order
points.sort(function (a, b) {
    return a - b;
})
console.log("Sorted Array : ", points);
console.log(`Lowest Value : ${points[0]} and Highest Value : ${points[points.length - 1]}`);

//* Lowest Value and Highest Value descending Order
points.reverse();
console.log("Reverse Sort : ", points);
console.log(`Highest Value : ${points[0]} and Lowest Value : ${points[points.length - 1]}`);

//* Built-in Methods
console.log("Minimum : ", (Math.min.apply(null, points)));
console.log("Maximum : ", (Math.max.apply(null, points)));

//* Built-in Methods
console.log("Minimum : ", (Math.min(...points)));
console.log("Maximum : ", (Math.max(...points)));

//* Make Max Method 
function max(arr) {
    let max = -Infinity;
    let length = arr.length;
    while (length--) {
        if (arr[length] > max)
            max = arr[length]
    }
    return max
}

console.log("Maximum of Array : ", max(points));

//* Make Min Method
function min(arr) {
    let length = arr.length;
    let min = Infinity;
    while (length--) {
        if (arr[length] < min) {
            min = arr[length]
        }
    }
    return min;
}

let result = min(points)
console.log("Minimum of Array : ", result);

//* Sort On Object
let obj1 = [
    { name: "Divesh", age: 23 },
    { name: "Vaibhav", age: 22 },
    { name: "Nayan", age: 26 },
    { name: "Tushar", age: 23 },
    { name: "Purab", age: 22 },
    { name: "prathi", age: 21 },
    { name: "Bhagi", age: 18 }
]

//* ascending Sort on Object
obj1.sort(function (a, b) {
    return a.age - b.age;
})
console.log("ascending Sort : ", obj1);

//* descending Sort On Object
obj1.reverse();
console.log("descending Sort : ", obj1);

//* Sort on String
console.log("Sorted : ", obj1.sort(function (a, b) {
    let temp1 = a.name.toLowerCase();
    let temp2 = b.name.toLowerCase();
    console.log(`temp1 : ${temp1} and temp2 : ${temp2}`);
    if (temp1 < temp2) return -1;
    if (temp1 > temp2) return 1;
    return 0;
}))

//* Sorting Names Based on length of Name
personNames.sort(function (a, b) {
    return a.length - b.length;
})
console.log("Sorted : ", personNames);

// personNames.reverse();
// console.log("Sorted : ",personNames);

// console.log(personNames[personNames.length-1].length);
const numbers = ["One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];

const person = {};
for (let i = 1; i <= personNames[personNames.length - 1].length; i++) {
    let ans = personNames.filter((Value) => {
        return Value.length === i;
    });

    person[numbers[i - 1]] = ans;
}

let ans = [];
for (let val in person) {
    if (person[val].length != 0) {
        person[val] = person[val].sort(function (a, b) {
            let temp1 = a.toLowerCase();
            let temp2 = b.toLowerCase();
            console.log(`temp1 : ${temp1} and temp2 : ${temp2}`);
            if (temp1 < temp2) return -1;
            if (temp1 > temp2) return 1;
            return 0;
        })
        ans.push(person[val]);
    }
}

//* Sorted Names
let finalOutput = [];
for(let i = 0; i < ans.length;i++){
    finalOutput = finalOutput.concat(ans[i]);
}
console.log("Final Output : ",finalOutput)


