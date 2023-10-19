//* Sort String Numbers
const numbers = ["5","6","1","2","3","4","10","30","25","20"];
const sorted = numbers.map(Number).sort((a,b)=> a - b);
console.log(sorted);

//* Iteration in Array
//* Method First (For Each)
let sum = 0;
numbers.forEach((value,index,array)=>{
    array[index] = Number(value)
    sum+= array[index];
})
console.log(numbers);
console.log(sum)


//* Method Second (Map)
let newArray = [];
numbers.map((value,index,array)=>{
    newArray[index] = value * 2;
})

console.log(newArray);

//* Method Third (Flat)
let newArr = numbers.map((value)=>[value**2]).flat();
console.log("Flatten Array : ",newArr);

let points = [1,23,[4,5,[5,6,7,[8,9,4,3,[1,24],4],8],9],12];
console.log("Points : ",points)
let ans = points.flat(3);
console.log("Flattened : ",ans);

// Remove Hole values in Array
let p = [1,,,2,3,,555,,,,6];
console.log(p.flat())

console.log(points)

//* Method Fourth (flatMap())
let np = [1,2,3,4,4,5,5,6,6,7,87];
let a = np.flatMap((value)=>[value**2]);
console.log(a);

//* Even Number
function isEven(number){
    if(number%2 ===0) return true;
    else return false;
}
const num = [23,76,26,19,20,12,24,57,90];
console.log("Even Numbers : ",num.filter(isEven));

//* Filter In Array
const mix = [4000,7000,"User",8000,"Friday",null,undefined,12000,1200,0];
function check(number){
    return number>2000 && !isNaN(number);
}

console.log("Not a Number and Greater Than 2000 : ",mix.filter(check));

//* Search in Array
const languages = ["Javascript","C++","C","PHP","Sql","Java","Go"];

function search(arr,query){
    function searchWord(word){
        return word.toLowerCase().indexOf(query.toLowerCase())!= -1;
    }
    
    return arr.filter(searchWord)
}

let arr = search(languages,"Ja");
console.log("Find Ja : ",arr);


let arr1 = search(languages,"c");
console.log("Find C : ",arr1)

