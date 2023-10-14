//? Back Ticks
let message = `Hello this is new file's that "includes Template" literals 'Examples with' practical Knowledge`
console.log(message);

console.log(`${message} \n 
Hello Jeee!!!
THIS
CAT IS
AWESOME 
awesome :)
`);

let msg = "hello \"jeee\" how are you guyzzzz";
console.log(msg);

let msg1 = 'hello \'jeee\'  \t how are you guyzzzz';
msg1 = 'hello \'jeee\' \v how are you guyzzzz';
msg1 = 'hello \'jeee\' \b\b\b how are you guyzzzz';
msg1 = 'hello \'jeee\' \f how are you guyzzzz';
msg1 = 'hello \'jeee\' \r how are you guyzzzz';
msg1 = 'hello \'jeee\' \\ how are you guyzzzz';


console.log(msg1);
console.log(`\n"""""""""""""""""""""""""""""""""\n`)

//? Date and Time
//* Date Constructor
const date1 = new Date();
console.log(date1.toString());

const date2 = new Date("2023-10-13 23:23:00");
console.log(date2.toString());

const date3 = new Date("October 13,2023 11:23:00")
console.log(date3.toString());

//* Only date
const date4 = new Date(2018,6,9);
console.log(date4.toString())

//* Date with time
const date5 = new Date(2020,9,29,9);
console.log(date5.toString())

//* Date with time
const date6 =  new Date(2022,9,29,9,23);
console.log(date6.toString());

//* Date with time
const date7 = new Date(2022,9,10,9,23,40);
console.log(date7.toString())

//* Date with time
const date8 = new Date(2022,9,10,9,23,44,999);
console.log(date8.toString());

//* if value not given it adds 19xx year
const date9 = new Date(12,9,12);
console.log(date9.toString());


//* if value of Month overflow it gets Month increase by that Month number
const date10 = new Date(2023,12,1);
console.log(date10.toString());

//* if value of Day overflow it gets Day increase by that day number
const date11 = new Date(2023,9,32);
console.log(date11.toString());


//? Date Format

//* Iso Date
const newDate = new Date("2023/10/25");
console.log(newDate.toDateString());

//* Short date
const newDate1 = new Date("10-9-2023");
console.log(newDate1.toDateString())

//* Long Date
const newDate2 = new Date("January 1 2023");
console.log(newDate2.toDateString());

//* change Date or month position no matters
const newDate3 = new Date("jan 1 2024");
console.log(newDate3.toDateString());

const newDate4 = new Date("1 jan 2028")
console.log(newDate4.toDateString());

//? Calculate milliseconds
const newMilliSeconds = Date.parse("Feb 3 2023");
console.log("MilliSeonds",newMilliSeconds)