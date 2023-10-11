let person ={
    name:"divesh",
    age:23,
    skill:["JS","React","Javascript"],
    draw:function(){
        console.log("Hello Jee");
    },
}

let fruits ={
    name:"Mango",
    color:"Yellow",
    price:120
}

//* Accessing Object Lenght using keys
console.log(Object.keys(person).length);

//* Apply for of loop on Object
for(let [key,value] of Object.entries(person)){
    console.log("Key : "+key+ " and Values : "+value);
}

//* Apply for of loop on Object
console.log(`""""""""   KEYS OF oBJECT """"""""""`)
for(let key of Object.keys(person)){
    console.log(key);
}

console.log(`""""""""   vALUES OF oBJECT """"""""""`)

for(let value of Object.values(person)){
    console.log(value);
}

//* Check if some properties exist or not
if('age' in person){
    console.log("Present");
}else{
    console.log("Not present");
} 

//? Object Cloning
//* Method 1 => iteration

let person2 = {};
for(let val in person){
    if(person.hasOwnProperty(val)){
        person2[val] = person[val];
    }
}
console.log("Person 2 : ",person2);


//* Method 2 => Assign method

let person3 = Object.assign({},person,fruits)
console.log("Person 3 : ",person3);

//* Method 3 => spread Operator
let person4 = {...person};
console.log("Person 4 : ",person4);

//* Method 4 => Json
let person5 = JSON.parse(JSON.stringify(person));
console.log("Person 5 : ",person5);