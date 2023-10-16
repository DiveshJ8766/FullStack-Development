//? Iterate Array

let arr = [10, 20, 30, 40, 50,{name:"New User",age:23},walk = function(){
    console.log("Walking.....");
},["BMW","Audi","Mercedes","Fords"]];

//* First Method (for of)
for (let val of arr) {
    console.log(`Value of ${arr.indexOf(val)}th Index : ${val}`);
}

console.log(`\n"""""""""""""""""""""""""""""""""\n`);

//* Second Method (for each)
arr.forEach((value) => {
    console.log(`Value of ${arr.indexOf(value)}th Index : ${value}`);
})

console.log(`\n"""""""""""""""""""""""""""""""""\n`);

arr.forEach(function(value){
    console.log(`Value of ${arr.indexOf(value)}th Index : ${value}`);
})
