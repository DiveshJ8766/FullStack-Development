//? Slice Method
let msg = "This is paragraph And COLOR of text is red";

//* Lenght
console.log(msg.length);

//* Slice Method
console.log(msg.slice(3,9)); //* 3 is included and 9 is excluded
console.log(msg.slice(8));//* rest of string
console.log(msg.slice(-16,-8))//* starts from ending

//* substring Methods
console.log(msg.substring(3,9)); //* 3 is included and 16 is excluded
console.log(msg.substring(8));

//* Difference is that negative numbers are treated as zero
console.log(msg.substring(-16,-8));
console.log(msg.substring(-16,8));

//* substr method
console.log(msg.substr(3,6));
console.log(msg.substr(-4));

//* Replace Method
let msg1 = msg.replace("paragraph","span tag");
console.log(msg1);

//* making insensitive
let msg2 = msg.replace(/Paragraph/i,"span tag");
console.log(msg2);

//* making global search
let msg3 = msg.replace(/is/g,":)");
console.log(msg3);

//* replaceAll Method 
//* only difference is that instead of using g flag in replace we can use replaceAll

let msg4 = msg.replaceAll("is","new_text");
console.log(msg4);

//* Uppercase
let msg5 = msg.toUpperCase();
console.log("Uppercase : ",msg5)

//* Lowercase
let msg6 = msg.toLowerCase();
console.log("Lowercase : ",msg6);

//* Concat Method
let fname = "Divesh";
let lname = "Jadhav";
console.log(fname.concat(" ",lname));
console.log("Divesh".concat(" ",lname));

//* Trim Method
let newStirng = `                             This is new paragraph and it's text color is orange                `;

console.log(newStirng + newStirng.length);
console.log(newStirng.trim() + newStirng.trim().length);

//* trimend
console.log(newStirng.trimEnd() + newStirng.trimEnd().length);

//* trimStart
console.log(newStirng.trimStart() + newStirng.trimStart().length);


//* PadStart
let no = "5"
console.log("Adding At Start : ",no.padStart(4,"x"));
//* PadEnd
console.log("Adding At End : ",no.padEnd(4,"x"));
no="12345"
console.log("Lenght Exceeded : ",no.padStart(5,"x"));
console.log("Lenght Exceeded : ",no.padEnd(5,"x"));


//* CharAt Method
let newMessage = "Dogs are very sweet animals."
let newStr = "";
let strCodes = "";
for(let i = 0;i < newMessage.length;i++){
    newStr += newMessage.charAt(i);
    strCodes += newMessage.charCodeAt(i) + " ";
}

console.log(newStr);
console.log(strCodes);

console.log(newMessage[5]);//* property accessing is read only
newMessage[5] = "b"//* Proeprty Accessing is readonly
console.log(newMessage[5])//* no error but doesn't works


//? Converting A string into Array
let str = "The color of sky is blue and looks beautiful";

//* split
let strArray = str.split(" ");
console.log(strArray);

strArray = str.split("s");
console.log(strArray);

//* if empty string then all character array is formed
console.log(str.split(""));


//? String search Methods
let text = "This is new text and new color of text is pink";

//* Indexof
console.log(text.indexOf("new"));

//* giving start position
console.log(text.indexOf("new",12));

//* Last Index of
console.log(text.lastIndexOf("new"));

//*giving Starting Posiiton
console.log(text.lastIndexOf("new",20));

//* If value not Found
console.log(text.indexOf(" "));
console.log(text.lastIndexOf(" "))

//* Search Method
console.log(text.search("new"));
console.log(text.search(/new/));

//* Match Method
let ans = text.match(/i/gi);
console.log("Character i found : ",ans.length,"times")
for(let val of ans){
    console.log("Values : ",val);
}

//* MatchAll Method
let iterator = text.matchAll("i");
console.log(iterator)
for(let val1 of iterator){
   console.log("Founded at index : ",val1.index)
}


//* includes
console.log(text.includes("new"));
console.log(text.includes("NEW"));
console.log(text.includes(""));

//* Startswith
console.log(text.startsWith("Th"));
console.log(text.startsWith("This"));
console.log(text.startsWith("new"));

//* EndsWith
console.log(text.endsWith("nk"));
console.log(text.endsWith("pink"));
console.log(text.endsWith("new"));

