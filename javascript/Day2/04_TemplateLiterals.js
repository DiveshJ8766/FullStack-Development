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
const newDate = new Date("2020-10-12");
console.log("Date : ",newDate.toString());

const newDate7 = new Date("2028-10");
console.log("year and Month : ",newDate7.toString())

const newDate8 = new Date("2024");
console.log("year",newDate8.toString())

//* Short date
const newDate1 = new Date("2023/10/25");
console.log(newDate1.toString())

const newDate9 = new Date("2023/10");
console.log(newDate9.toString())

const newDate10 = new Date("2023");
console.log(newDate10.toString())


//* Long Date
const newDate2 = new Date("January 1 2023");
console.log(newDate2.toString());

//* change Date or month position no matters
const newDate3 = new Date("jan 1 2024");
console.log(newDate3.toString());

const newDate4 = new Date("1 jan 2028")
console.log(newDate4.toString());

const newDate5 = new Date("March 1 2026");
console.log(newDate5.toString());

//? Calculate milliseconds
const newMilliSeconds = Date.parse("Feb 3 2023");
console.log("MilliSeonds",newMilliSeconds)

//? Get Methods
const  date = new Date();
console.log("Date : ",date.toString());
console.log("Get Fullyear : ",date.getFullYear());

const months = ["January","Feburary","March","April","May","June","July","August","September","October","November","December"];

console.log("Month : ",date.getMonth());
console.log("Month : ",months[date.getMonth()]);

const days = ["Monday","Tuesday","Wednesday","Thursday","Friday","saturday","Sunday"];

console.log("Day : ",date.getDay());
console.log("Day : ",days[date.getDay()-1]);
console.log("Minutes : ",date.getMinutes());
console.log("Hours : ",date.getHours());
console.log("Seconds : ",date.getSeconds());
console.log("Milliseconds : ",date.getMilliseconds());

//? GetTime
console.log("Time in Milliseconds : ",date.getTime());

//? Date.now()
console.log("Date in Milliseconds : ",Date.now() )

//? Date.parse()
console.log("Date Parse : ",Date.parse(date));

//? No of years passed from 1 jan 1970

const minutes = 1000 * 60;
const hour = 60 * minutes;
const day = 24 * hour;
const year = 360 * day;

console.log("Year Passed : ",Math.round(Date.now()/year))


//? UTC GetMethods 
console.log("Date : ",date.toString());
console.log("Get Fullyear : ",date.getUTCFullYear());
console.log("Month : ",date.getUTCMonth());
console.log("Month : ",months[date.getUTCMonth()]);
console.log("Day : ",date.getUTCDate());
console.log("Day : ",days[date.getUTCDay()-1]);
console.log("Minutes : ",date.getUTCMinutes());
console.log("Hours : ",date.getUTCHours());
console.log("Seconds : ",date.getUTCSeconds());
console.log("Milliseconds : ",date.getUTCMilliseconds());

//? getTimezoneOffset
console.log("Difference Between Local And Utc : ",date.getTimezoneOffset());

const d = new Date();
d.setDate(29);

console.log("Date : ",d.toDateString())
d.setFullYear(2029);
console.log("Year : ",d.toDateString());
d.setHours(22);
console.log("Hours : ",d.getHours());


//? compare two dates
let text = "";
const today = new Date();
const someday = new Date();
someday.setFullYear(2100, 0, 14);

if (someday > today) {
  text = "Today is before January 14, 2100.";
} else {
  text = "Today is after January 14, 2100.";
}

console.log(text);